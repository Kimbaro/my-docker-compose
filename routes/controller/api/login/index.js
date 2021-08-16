const express = require("express");
const router = express.Router();
const {user} = require("../../../model");

router.post("/", async (req, res, next) => {
    try {
        if (req.body.id) {
            let findByIdAndPw = await user.findOne({
                where: {
                    user_id: req.body.id,
                    user_pw: req.body.pw
                }
            });
            if (findByIdAndPw) {
                console.log(findByIdAndPw);
                res.send(findByIdAndPw);
            } else {
                res.status(402).send("계정 정보가 잘못됨");
            }
        } else {
            res.status(402).send("계정 정보가 잘못됨");
        }
    } catch (error) {
        console.error(error);
        res.status(402).send("아이디를 찾을 수 없음");
    }
});
router.get("/ejs", async (req, res, next) => {
    res.render("login/index.ejs");

});

module.exports = router;
