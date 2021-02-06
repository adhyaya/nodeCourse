const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbName = 'conFusion';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {


  assert.equal(error, null);

  console.log('connected');

  const db = client.db(dbName);

  dboper.insertDocument(db, {
    name: "Vandout",
    description: "Test",
  }, "dishes", (result) => {
    console.log('Insert Document:\n', result.ops);

    dboper.findDocuments(db, 'dishes', (docs) => {
      console.log('Found Documents:\n', docs);
      dboper.updateDocument(db, { name: 'Vandout' }, { description: 'Updated' }, 'dishes', (result) => {
        console.log('Updated Documents:\n', result);
        dboper.findDocuments(db, 'dishes', (docs) => {
          console.log('Found Documnents', docs)
        })
      })
    })
  })
})