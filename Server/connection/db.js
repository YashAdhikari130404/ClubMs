import mysql from 'mysql2'

const con = mysql.createConnection({
    host:'localhost',       
    user:'root',           
    password:'sa123',           
    database:'clubms'
})

con.connect(function(err){
    if(err){
        console.log("Connection error")
    }else{
        console.log("Connected")
    }
})

export default con;