//===============================
//express init
//===============================
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// app.use(express.urlencoded({extended: false}));
const logger = require('morgan');
app.use(logger({
    format: 'dev',
}));
const path = require('path');
app.set('routes/view', path.join(__dirname, 'routes/view'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


//===============================
//model init
//===============================
const db_init = require("./routes/model");
db_init.sequelize.sync().then(() => {
    console.log("connected rdb");
}).catch((err) => {
    logger(err);
});

//===============================
//view init
//===============================

//===============================
//controller init
//===============================
app.use("/api", require("./routes/controller/api/index"));


//===============================
//start http server
//===============================
app.listen(8080, () => {
    console.log("start server port:8080");
});

module.exports = app;