const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const { Category } = require("../models/Category");
// const { User } = require('../models/User');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/cate", (req, res) => {
    Category.find(function(error, results){
        if(error){
            console.log(error);
        }else{
            console.log(results);
        }
    })
});

router.post("/pointing", (req, res) => {
    const cate = new Category(req.body);

    cate.save((err, cateInfo) => {
        if (err) return res.json({ success : false, err })
        return res.status(200).json({
            success: true
        })
    })
})

module.exports = router;