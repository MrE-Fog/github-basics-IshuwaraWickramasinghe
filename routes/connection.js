var mysql = require('mysql')
var db;

var settings = {

    host: 'localhost',
    user: 'root',
    password: '031519.chuti',
    database: 'library_management',
    insecureAuth : true
   
};

function connectdatabase() {
     
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function (err) {
            if(!err){
                console.log("Database Connected");
            }else{
                console.log(err);
            }
        })
    }
    return db;

}
module.exports=connectdatabase();

 