const express = require("express");
const router = express.Router();
const {dust_collector_manager} = require("../../../model");

//탈진관리
router.get("/", async (req, res, next) => {
    try {
        let findByOne = await dust_collector_manager.findOne({});
        //console.log(findByOne);
        res.status(200).send(findByOne);
        //res.render("res_api_render/dust_collector_manager.ejs", findByOne.dataValues)
    } catch (error) {
        console.error(error);
        next(error);
        res.status(402).send("존재하지 않음");
    }
});
router.get("/ejs", async (req, res, next) => {
    try {
        let findByOne = await dust_collector_manager.findOne({});
        //res.status(200).send(findByOne);
        res.render("res_api_render/dust_collector_manager.ejs", findByOne.dataValues)
    } catch (error) {
        console.error(error);
        next(error);
        res.status(402).send("존재하지 않음");
    }
});

module.exports = router;
