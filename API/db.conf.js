const mysql=require("mysql2");

const conn=mysql.createConnection({
host:'localhost',
user:'root',
password:'@Pappu1234',
database:'mobikartdb',
port: 5050
});

module.exports=conn;