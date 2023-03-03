//파일업로드
var multer = require('multer');
var _storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload = multer({storage: _storage})

var bodyParser = require('body-parser');
const { response, query, application } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');
const app = express();
const ejs = require("ejs");
const mainPage = fs.readFileSync('data.html', 'utf8');
const mysql = require('mysql');  // mysql 모듈 로드
const { createBrotliCompress } = require('zlib');
const conn = mysql.createConnection({  // mysql 접속 설정
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sakila'
});

app.use('/user',express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname+"/public"));


app.listen(8080, function(){
    console.log('listening on 8080');
    console.log(__dirname + " : real address");
    
});

// app.get('/', (req, res) => {
//     conn.query("SELECT * FROM guest_book;", function(err, result, fields){
//         if(err) throw err;
//         else{
//             var page = ejs.render(mainPage, {
//                 title: "Temporary Title",
//                 data: result,
//             });
//             res.send(page);
//         }
//     });
// });

app.get('/', (req, res) => {
    // res.sendFile(__dirname + "/data.html");
    res.sendFile(__dirname + "/data.html");
});

app.get('/a', (req, res) => {
    res.sendFile(__dirname + "/data.html");
});


app.get('/aboutus', (req, res) => {
    res.sendFile(__dirname + "/aboutus.html");
});
app.get('/works', (req, res) => {
    res.sendFile(__dirname + "/works.html");
});