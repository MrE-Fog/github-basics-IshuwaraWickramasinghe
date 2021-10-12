var mysql = require('mysql')
var db;

var settings = {

    host: '127.0.0.1',
    user: 'root',
    password: '031519.chuti',
    database: 'library_management'
};

function connectdatabase() {

    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function (err) {
            if(!err){
                console.log("Database Connected");
            }else{
                console.log("Database Connection error");
            }
        })
    }
    return db;

}

module.exports=connectdatabase(); 