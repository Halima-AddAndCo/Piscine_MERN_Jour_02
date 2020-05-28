// const express = require ('express');

// const router = express();

// router.get ('/', (req, res) => {
//   res.send ('Ça marche!');
// });

//module.exports = routeur;
// router.listen(27042);



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://halima:HelloEtoile100%@cluster0-0lvaq.mongodb.net/mern-pool?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("mern-pool").collection("students");
//   // perform actions on the collection object
//   uri.students.insert({lastname:"", firstname:""})
//  // client.close();
// });

const express = require("express");
const http = require('http');
const fs = require('fs');
const app = express();

function onRequest (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function (error, data){
        if(error){
            res.writeHead(404);
            res.write('file not found');

        } else {
            res.write(data);
        }
      res.end();
    });
}

  http.createServer(onRequest).listen(27042);
 

  const mongoose = require('mongoose');
  const bodyParser=require("body-parser"); 
//   var MongoClient = mongo.MongoClient; est un contructeur
  mongoose.connect("mongodb+srv://halima:HelloEtoile100%@cluster0-0lvaq.mongodb.net/mern-pool?retryWrites=true&w=majority");
  app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
  
app.post('/add_stud', function(req,res){ 
    var name = req.body.name; 
    var email =req.body.email; 
    var lastname = req.body.lastname; 
    var phone =req.body.phone; 

    var data = { 
        "firstname": name, 
        "email":email, 
        "lastname": lastname, 
        "phone":phone,
        "validate":validate
    } 
    mongoose.connection.once('open', function(){
        console.log('Connection successfull');
    }).on('error', function(error){
        console.log('not connected', error)
    });
mangoose.collection('students').insert(data,function(err, collection){ 
        if (err) throw err; 
        console.log("Record inserted Successfully"); 
            
    }); 
        
    return res.redirect('add_stud.html'); 
}) 
 


  //mongoose.listen(27042);
  
 

// const express = require ('express');
// const path = require ('/home/Halima/Piscine_MERN_Jour_02/view/form.pug');
// const routes = require ('./ route / index');

// const app = express ();

// app.set ('view', path.join (__dirname, 'view'));
// app.set ('view engine', 'pug');

// app.use ('/', routes);
// app.listen(27042);

// module.exports = app;