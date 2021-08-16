const app = require("express");
const router = app.Router();

router.get("/", (req, res, next) => {
    res.render("main/index.ejs", {"message": "hello_world", "title": "hello_world"});
});
router.get("/login", (req, res, next) => {
    res.render("login/index.ejs");
});


module.exports = router;