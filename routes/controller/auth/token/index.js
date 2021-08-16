const app = require("express");
const router = app.Router();

router.get("/", (req, res, next) => {
    res.send("인증토큰구현부입니다.");
});


module.exports = router;
