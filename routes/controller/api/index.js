const app = require("express");
const router = app.Router();

//===============================
//user
//===============================
router.use("/user", require("./user/index"));

//===============================
//login
//===============================
router.use("/login", require("./login/index"));

//===============================
//dust_collector_managers
//===============================
router.use("/dust_collector_managers", require("./dust_collector_managers/index"));

//===============================
//dust_collector_operation
//===============================
router.use("/dust_collector_operation", require("./dust_collector_operation/index"));

module.exports = router;
