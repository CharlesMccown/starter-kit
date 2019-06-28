import { MongoClient } from 'mongodb'
import Nav from '../src/model/nav'


const NavHandler = {
  getAll: (_req, res) => {
    res.send(NavHandler.nav)
  }
}

NavHandler.nav = [];
MongoClient.connect('mongodb://localhost:27017/', function(err, db) {
  var dbo = db.db("loredb")
  dbo.collection('nav').find({}).toArray(function(err, result) {
    if (err) throw err;
    result.map(n => {
      NavHandler.nav.push(new Nav(n.order, n.title, n.url, n.parent))
    })
    db.close();
    NavHandler.nav.sort((a, b) =>{
      return a.order-b.order
    })
  })
})

export default NavHandler;
