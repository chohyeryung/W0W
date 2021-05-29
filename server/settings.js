const cron = require('node-cron');
const { Category } = require("./models/Category");

const prevDate = (now) => {
    let yyyy = now.getFullYear();
    let month = now.getMonth();
    
    if(month < 10) {
        month = `0${month}`
    }

    return yyyy + '-' + month;
}

//0 0 0 1 * * 매달 1월 12시에
var job = cron.schedule('0 41 23 * * *', function() {

    let now = new Date();
    let yyyy = now.getFullYear();
    let month = now.getMonth()+1;
    
    if(month < 10) {
        month = `0${month}`
    }

    let ndate = yyyy + '-' + month;
    let pdate = prevDate(now);

    Category.deleteMany(
        { created: { 
            $not: { $regex: ndate }, 
            $not: { $regex: ndate }
        } }
    ).exec(function (err, results) {
        if(err) console.log(err);
        console.log(results);
    })

})


module.exports = job;