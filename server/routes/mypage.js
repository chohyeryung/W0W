const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const { Category } = require("../models/Category");
// const { User } = require('../models/User');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/cate', (req, res) => {
    let now = new Date();
    let yyyy = now.getFullYear();
    let month = now.getMonth()+1;
    
    if(month < 10) {
        month = `0${month}`
    }

    let ndate = yyyy + '-' + month;

    // console.log(ndate);

    Category.aggregate(
        [
            { $match: { 
                $and: [ 
                    { $or: [{ category: "종이빨대" }, { category: "용기내" }, { category: "쓰레기줍기" }, { category: "분리수거" }, { category: "대중교통" }, { category: "기타" } ] },
                    { created: { $regex: ndate } }
                ] } },
            { $group: { _id: { category: "$category" }, category: { $first: "$category" }, cnt: { $sum: 1 } } },
            { $sort: { category: -1 } }
        ]).exec(function (err, results) {
            if(err) console.log(err);
            console.log(results);
            res.send(results);
        })
});

router.post('/pointing', (req, res) => {
    let category = req.body.ca;

    let now = new Date();
    let yyyy = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();
    
    if(month < 10) {
        month = `0${month}`
    }

    if(day < 10) {
        day = `0${day}`
    }

    let ndate = yyyy + '-' + month + '-' + day;

    let data = {
        "idx": 1,
        "useridx": 2,
        "category": category,
        "score": 3,
        "created": ndate
    }

    const cate = new Category(data);

    cate.save((err, cateInfo) => {
        if (err) return res.json({ success : false, err })
        res.send(cateInfo);
    })
})

module.exports = router;