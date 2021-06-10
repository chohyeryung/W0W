const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const { Category } = require("../models/Category");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/cate', (req, res) => {
    let now = new Date();
    let yyyy = now.getFullYear();
    let month = now.getMonth()+1;
    const userId = req.body.user_id;
    console.log(userId);
    
    if(month < 10) {
        month = `0${month}`
    }

    let ndate = yyyy + '-' + month;

    Category.aggregate(
        [
            { $match: { 
                $and: [ 
                    { userid: userId },
                    { $or: [{ category: "장바구니 이용" }, { category: "용기내" }, { category: "쓰레기 줍기" }, { category: "분리수거" }, { category: "대중교통 이용" }, { category: "기타" } ] },
                    { created: { $regex: ndate } }
                ] } },
            { $group: { _id: { category: "$category" }, category: { $first: "$category" }, cnt: { $sum: 1 } } },
            { $sort: { category: -1 } }
        ]).exec(function (err, results) {
            if(err) console.log(err);
            res.send(results);
        })
});

router.post('/pointing', (req, res) => {
    let category = req.body.ca;

    let now = new Date();
    let yyyy = now.getFullYear();
    let month = now.getMonth()+1;
    
    if(month < 10) {
        month = `0${month}`
    }


    let ndate = yyyy + '-' + month ;

    let data = {
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
});

router.get('/statistics', (req, res) => {
    Category.aggregate([
        { $group: { _id: { created:"$created"} , total: { $sum: "$score" } } }
    ]).exec(function (err, results) {
        if(err) console.log(err);
        res.send(results);
    })
});


module.exports = router;