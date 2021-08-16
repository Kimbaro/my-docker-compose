//===============================
//express init
//===============================
// ".env.dev"
const express = require("express");
const app = express();
require("dotenv").config({path: process.env.NODE_ENV == "production" ? ".env.prod" : ".env.dev"});// .env 파일에서 환경변수 불러오기
const path = require('path');
const db_init = require("./routes/model");

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'routes/view'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//===============================
//model init
//===============================
db_init.sequelize.sync().then(() => {
    console.log("connected rdb");
}).catch((err) => {
    console.log(err);
});

//===============================
//view init
//===============================
app.use("/render", require("./routes/view/index"));

//===============================
//controller init
//===============================
app.use("/api/v1", require("./routes/controller/api/index")); //서비스 api
app.use("/api/v1/auth", require("./routes/controller/auth/index")); //인증 api

//===============================
//start http server
//===============================
app.listen(process.env.PORT, () => {
    console.log(`start server port:${process.env.PORT}`);
});

module.exports = app;