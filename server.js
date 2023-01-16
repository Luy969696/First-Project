const { response, query } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');
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


app.use(express.static(__dirname+"/public"))

app.listen(8080, function(){
    console.log('listening on 8080');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/data.ejs")
});
 
app.get('/getdata?', (req, res) => {
    
    conn.query("SELECT * FROM friends;", function(err, result, fields){
        if(err) throw err;
        else{
            var page = ejs.render(mainPage, {
                title: "Temporary Title",
                data: result,
            });
            res.send(page);
        }
    });
});
