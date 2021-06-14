const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const { Category } = require("../models/Category");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/main/:useridx', (req, res) => {
    const useridx = req.params.useridx;
    const image = ['sea_BN','sea_GB','sea_YG','sea_OY']
    let now = new Date();
    let yyyy = now.getFullYear();
    let month = now.getMonth()+1;
    
    if(month < 10) {
        month = `0${month}`
    }
    let ndate = yyyy + '-' + month ;

    Category.aggregate([
        {$match: { userid : useridx , created : ndate}},
        { $group: { _id: { created: { $substr: ["$created", 0, 7] }, userid:"$userid" }, total: { $sum: "$score" } } }
    ]).exec( (err, results) =>{
        if(err) console.log(err);
        let src;
        let total;
        if(results.length==0){
            total = 0
        }else{
            total = results[0].total;
        }
        // let total = results ? results[0].total : 0
        let num =  Math.round(100/140*total);
        if(num>=100){
            src = image[0]
        }else if(num>=60){
            src = image[1]
        }else if(num>=30){
            src = image[2]
        }else{
            src = image[3]
        }
        const result={num : num , src : src};
        res.send(result)        
    })
});


module.exports = router;