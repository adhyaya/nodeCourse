const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbName = 'conFusion';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {


  assert.equal(error, null);

  console.log('connected');

  const db = client.db(dbName);
  const collection = db.collection('dishes');

  collection.insertOne({
    "name": "mansi",
    "last name": "thakur"
  },
    (error, result => {


      assert.equal(error, null);

      console.log('After insertion');
      console.log(result);

      collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);

        console.log('Found ');
        console.log(docs);

        db.dropCollection('dishes', (err, result) => {
          assert.equal(err, null);

          client.close();
        })
      })
    }))
})