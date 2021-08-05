const app = require("express");
const router = app.Router();
const {user} = require("../../../model");

router.get("/", async (req, res, next) => {
    console.log(req.query.email);
    try {
        if (req.query.email) {
            let findByUserEmail = await user.findOne({
                where: {
                    email: req.query.email
                }
            });
            res.status(200).json(findByUserEmail);
        } else {
            res.status(402).send("존재하지 않음");
        }
    } catch (error) {
        console.error(error);
        next(error);
        res.status(402).send("존재하지 않음");
    }
});
router.post("/", async (req, res, next) => {
    let searchUserResult = await user.findOne({
        where: {
            email: req.body.email
        }
    });
    try {
        if (searchUserResult) {
            res.status(403).send("이미 존재하는 아이디 입니다.");
        } else {
            console.log("신규 생성합니다.");
            await user.create({
                email: req.body.email,
                nickname: req.body.nickname,
                password: req.body.password
            });
            res.status(200).send("계정생성");
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
