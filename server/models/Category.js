const mongoose = require('mongoose');

const cateSchema = mongoose.Schema({
    //useridx, 항목, 점수, 날짜
    userid: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    score: {
        type:Number,
        required: true,
        default: 0
    },
    created: {
        type: String,
        required: true
    }
});


const Category = mongoose.model('Category', cateSchema);

module.exports = { Category }