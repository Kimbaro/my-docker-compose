const app = require("express");
const router = app.Router();

//===============================
//user
//===============================
router.use("/token", require("./token/index"));

module.exports = router;
