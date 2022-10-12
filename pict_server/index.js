let express = require('express');
let app = express();
//var mariadb = require('mariadb/callback');
var bodyParser = require('body-parser');
const { json } = require('body-parser');
const { parse } = require('path');
const fs = require('fs');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.urlencoded({extended: true}));


app.post("/Submit", function(req, res){

    let someData = req.body;
    console.log(someData);
   
    // try {
    //     fs.appendFileSync("./Database/test1.json", JSON.stringify(someData, null, 2), 'utf8');
    //     console.log('Data successfully saved to disk');
    //   } 
      
    //   catch (error) {
    //     console.log('An error has occurred ', error);
    //   }
  
    console.log("working");
    res.send(200);
})



app.listen(5000, function(err){
    if(err) throw err;
    else console.log("Listening on 5000");
})