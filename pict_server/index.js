let express = require('express');
let app = express();
var mariadb = require('mariadb/callback');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
const { parse } = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  const conn = mariadb.createConnection({
    host: 'localhost', 
    user:'root', 
    password: 'password123',
    database: 'projectdb'
});

BigInt.prototype.toJSON = function() {       
    return this.toString()
}


app.get("/", async function(req, res){
    await conn.query("SELECT * FROM projecttable", function(err, result, f){
       if(err)
            console.log(err);
        res.send(result);
    });
    
})

app.get("/desc", async function(req, res){
    await conn.query("DESC projecttable", function(err, result, f){
       if(err)
            console.log(err);
        res.send(result);
    });
    
})

app.listen(5000, function(err){
    if(err) throw err;
    else console.log("Listening on 5000");
})