const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const { Category } = require("../models/Category");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());



router.get('/statistics', (req, res) => {
    Category.aggregate([
        { $group: { _id: { created: { $substr: ["$created", 0, 7] } }, total: { $sum: "$score" } } }
    ]).exec(function (err, results) {
        if(err) console.log(err);
        res.send(results);
    })
});


module.exports = router;