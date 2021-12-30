const express = require('express');  
const app = express();  

app.use((req, res, next) => {
  console.log(req.method+''+req.url);
  next();
})
app.get('/', function (req, res, next) {  
  res.send('<h1>Welcome</h1>');  
});
app.get('/here', function (req, res, next) {  
  res.send('<h1>Here</h1>');  
});
app.listen(3000);