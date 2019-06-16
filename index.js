const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

var db;

//https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb?gi=6902a1f76bd4


const app = express();
app.use(cors());
app.use(bodyParser.json());
//pdf lib
//http://pdfkit.org/

const users =
      { 
          id: 1, 
          username: 'Test@test',
          password: 'test',
          firstName: 'Manoj',
          lastName: 'User'
        };
 
app.post('/login', (req, res) => {
   if (req.body.username == users.username && req.body.password == users.password){
       const user = users.firstName;
       res.status(200).send(user);
   }
   else {
    res.status(404).send(null);
   }
      
});

function connectToDb(){

  var uri = "mongodb://manojkumar.upreti@live.com:Mongo#123@mycluster0-shard-00-00.mongodb.net:27017,mycluster0-shard-00-01.mongodb.net:27017,mycluster0-shard-00-02.mongodb.net:27017/test?retryWrites=true&w=majority";

 // const uri = 'mongodb+srv://manojkumar.upreti@live.com:Mongo#123@cluster0-pig9s.mongodb.net/test?retryWrites=true&w=majority'
 // const uri = "mongodb+srv://manojkumar.upreti@live.com:Mongo#123@cluster0-pig9s.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((error, database)=> {
  console.log(error);
  db = database;
  console.log("Connected correctly to server", database);
});

//var MongoClient = require('mongodb').MongoClient;

//var uri = "mongodb://manojkumar.upreti@live.com:Mongo#123@cluster0-pig9s.mongodb.net:27017";
// MongoClient.connect(uri, function(err, client) {
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
// });

// mongoose.connect(uri, { useNewUrlParser: true }).then(
//   () => { console.log('Success') },
//   err => { console.log('error', err) }
// );

// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
}




app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
 // connectToDb();
});





