const app = require("express");
const router = app.Router();

//===============================
//user
//===============================
router.use("/user", require("./user/index"));

module.exports = router;
