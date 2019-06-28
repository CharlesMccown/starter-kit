import { MongoClient } from 'mongodb'
import Profession from '../src/model/profession'


const ProfessionHandler = {
  getAll: (_req, res) => {
    res.send(ProfessionHandler.profs)
  },
  get: (req, res) => {
    var prof = ProfessionHandler.profs.filter(p => p.name === req.params.name)[0]
    console.log(`${req.params.name}: ${prof}`)
    res.send(prof)
  },
  post: (req, res) => {
    ProfessionHandler.profs = ProfessionHandler.profs.concat(req.body)

    MongoClient.connect('mongodb://localhost:27017/', function(err, db) {
      if(err) throw err

      var dbo = db.db("loredb")
      dbo.collection('profession').insertOne(req.body, function(err) {
        if (err) throw err
        db.close();
      })
    })

    res.send(ProfessionHandler.profs)
  },
  put:(req, res) => {
    ProfessionHandler.profs = Object.assign(
      {},
      ProfessionHandler.profs.filter(prof => prof.id.toString() === req.params.id)[0],
      req.body)
      .sort((a, b) =>{
        return a.name.localeCompare(b.name)
      }
    )

    MongoClient.connect('mongodb://localhost:27017/', function(err, db) {
      if(err) throw err

      var dbo = db.db("loredb")
      dbo.collection('profession').update({"_id": req.body.id }, req.body, function(err) {
        if (err) throw err
        db.close();
      })
    })

    res.send(ProfessionHandler.profs)
  }
}

ProfessionHandler.profs = [];
MongoClient.connect('mongodb://localhost:27017/', function(err, db) {
  if(err) console.log(err)

  var dbo = db.db("loredb")
  dbo.collection('profession').find({}).toArray(function(err, result) {
    if (err) throw err;
    result.map(p => {
      ProfessionHandler.profs.push(new Profession(p.name, '', '', ''))
    })
    db.close();
    ProfessionHandler.profs.sort((a, b) =>{
      return a.name.localeCompare(b.name)
    })
  })
})

export default ProfessionHandler;
