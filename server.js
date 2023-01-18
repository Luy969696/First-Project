const { response, query } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');
var bodyParser = require('body-parser')
const app = express();
const ejs = require("ejs");
const mainPage = fs.readFileSync('data.ejs', 'utf8');
const mysql = require('mysql');  // mysql 모듈 로드
const conn = mysql.createConnection({  // mysql 접속 설정
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname+"/public"));

app.listen(8080, function(){
    console.log('listening on 8080');
});

// app.get('/', (req, res) => {
//     var page = ejs.render(mainPage, {
//     title: "Temporary Title",
//     });
//     res.send(page);
//     // res.sendFile(__dirname + "/data.ejs")
// });
 
app.post('/profile', function(req, res)  {
    console.log(req.body)
  })


app.get('/', (req, res) => {
    conn.query("SELECT * FROM guest_book;", function(err, result, fields){
        if(err) throw err;
        else{
            var page = ejs.render(mainPage, {
                title: "Temporary Title",
                data: result,
            });
            // console.log(result)
            res.send(page);
            
        }
    });
});

app.post("/AddData",(req,res)=>{
    var comment = req.body.Write_comment;

    // var body = req.body;
    // console.log();
    conn.query("insert into guest_book (name,context) values ('test',?);", [
        comment
      ], function() {
        res.redirect('/')
      })
      
    // conn.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted");
    // });

    // conn.query("SELECT * FROM friends;", function(err, result, fields){
    //     if(err) throw err;
    //     else{
    //         var page = ejs.render(mainPage, {
    //             title: "Temporary Title",
    //             data: result,
    //         });
    //         res.send(page);
    //     }
    // });
});