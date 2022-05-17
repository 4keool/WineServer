const mysql = require("mysql");

const db = mysql.createConnection({
    host: "web-study.cfrt0lxdkirv.ap-northeast-2.rds.amazonaws.com",
    user: "rys",
    password: "1323rksk",
    database: "wine_infomation"
});

db.connect();

module.exports = db;