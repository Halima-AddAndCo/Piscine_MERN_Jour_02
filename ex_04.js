const mongoose = require('mongoose');
//var MongoClient = mongo.MongoClient;
mongoose.connect("mongodb://localhost/mern-pool");


mongoose.connection.once('open', function(){
    console.log('Connection successfull');
}).on('error', function(error){
    console.log('not connected', error)
});











// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://halima:Helloetoile100%@cluster0-0lvaq.mongodb.net/mern-pool?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("mern-pool").collection("students");
//   // perform actions on the collection object
//   client.close();
// });
