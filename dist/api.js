const express = require("express");
const serverless = require("serverless-http");
var mustache = require('mustache-express'); 

const app = express();
const router = express.Router();



app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './dist/views');


router.get("/", (req, res) => {
  res.render('index');
});

app.use('/images', express.static('./dist/images'));  

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
