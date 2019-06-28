import { MongoClient } from 'mongodb'

class MongoDbModel {
  constructor(db, coll) {
    this.url = `mongodb://localhost:27017/${db}`

    this.collection = coll
    this.database = db
    this.getAll = function(callback) {
      MongoClient.connect(this.url, callback)
    }
  }
}

export default MongoDbModel
