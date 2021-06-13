const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const { User }  = require("../models/User");
const { Category } = require("../models/Category");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/name', (req, res) => {
    const userId = req.body.user_id;
    //name
    User.find({ _id: userId }, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

router.post('/cate', (req, res) => {
    let now = new Date();
    let yyyy = now.getFullYear();
    let month = now.getMonth()+1;
    const userId = req.body.user_id;
    
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
                    { created: ndate }
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
    const userId = req.body.user_id;

    let now = new Date();
    let yyyy = now.getFullYear();
    let month = now.getMonth()+1;
    
    if(month < 10) {
        month = `0${month}`
    }

    let ndate = yyyy + '-' + month ;

    let data = {
        "userid": userId,
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

router.post('/statistics', (req, res) => {
    const userId = req.body.user_id;

    Category.aggregate([
        { $match: { userid: userId } },
        { $group: { _id: { created: "$created" } , total: { $sum: "$score" } } }
    ]).exec(function (err, results) {
        if(err) console.log(err);
        res.send(results);
    })
});


module.exports = router;