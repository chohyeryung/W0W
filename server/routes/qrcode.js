const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const { Category } = require("../models/Category");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

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
});

module.exports = router;