var mysql = require('mysql')
var db;

var settings = {

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library_management'

   
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

 