const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const { Category } = require("../models/Category");
// const { User } = require('../models/User');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/cate', (req, res) => {
    Category.aggregate(
        [
            { $match: { $or: [{ category: "종이빨대" }, { category: "용기내" }, { category: "쓰레기줍기" }, { category: "분리수거" }, { category: "대중교통" }, { category: "기타" }] } },
            { $group: { _id: { category: "$category" }, category: { $first: "$category" }, cnt: { $sum: 1 } } },
            { $sort: { category: -1 } }
        ]).exec(function (err, results) {
            if(err) console.log(err);
            res.send(results);
        })
});

router.post('/pointing', (req, res) => {
    let category = req.body.ca;
    let score = 3;
    if(category == "qr"){
        score = 2;
    }
    console.log(score);
    // const cate = new Category(req.body);

    // cate.save((err, cateInfo) => {
    //     if (err) return res.json({ success : false, err })
    //     return res.status(200).json({
    //         success: true
    //     })
    // })
})

module.exports = router;