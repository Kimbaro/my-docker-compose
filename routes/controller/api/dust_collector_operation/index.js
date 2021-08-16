const express = require("express");
const router = express.Router();
const {dust_collector_operation} = require("../../../model");

//탈진관리
router.get("/", async (req, res, next) => {
    try {
        let findByAll = await dust_collector_operation.findAll({});
        res.status(200).send(findByAll);
        //res.render("res_api_render/dust_collector_manager.ejs", findByOne.dataValues)
    } catch (error) {
        console.error(error);
        next(error);
        res.status(402).send("존재하지 않음");
    }
});
router.get("/ejs", async (req, res, next) => {
    try {
        let findByAll = await dust_collector_operation.findAll({});
        console.log(findByAll);
        res.render("res_api_render/dust_collector_operation.ejs", {chambers: findByAll})
    } catch (error) {
        console.error(error);
        next(error);
        res.status(402).send("존재하지 않음");
    }
});

module.exports = router;
