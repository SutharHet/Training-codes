const express = require('express');
const { MongoClient } = require('mongodb');
const router = express.Router();

let main = async ()  => {
  const uri = 'mongodb+srv://SutharHet:oriohet2@cluster0.plpu1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
  let arr = [];
  MongoClient.connect(uri, (err, db) => {
    if (err) throw err;
    var dbo = db.db("sample_mflix");
    dbo.collection("users").find({}).limit(5).toArray((err, result) => {
      if (err) throw err;
      const table = document.getElementById('table'); 
      table.innerHTML = '<tr> <th>Name</th> <th>Email</th> </tr>';
      for(let i=0; i<result.length; i++){
        table.innerHTML += '<tr> <td>'+ result[i].name +'</td> <td>'+ result[i].email +'</td> </tr>';
      }
      db.close();
    });
  });
}
main().catch(console.error);

// router.get('/', (req, res, next) => {
//   res.sendFile(__dirname+'/index.html')
// });
// router.get('/about', (req, res, next) => {
//   res.sendFile(__dirname+'/about.html');
// })
// router.get('/contact-me', (req, res, next) => {
//   res.sendFile(__dirname+'/contact-me.html');
// })
// router.get('*', (req, res, next) => {
//   res.sendFile(__dirname+'/404.html');
// })

module.exports = router;