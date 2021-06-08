const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const { Category } = require("../models/Category");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/score', (req, res) => {
    Category.aggregate([
        {$match:{ state : {'useridx' : useridx}}},
        { $group: { _id: "$useridx", total: { $sum: "$score" } } }
    ]).exec(function (err, results) {
        if(err) console.log(err);
        // res.send(results);
        console.log(res)
    })
});


module.exports = router;