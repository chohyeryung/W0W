const mongoose = require('mongoose');

const cateSchema = mongoose.Schema({
    //idx, useridx, 항목, 점수, 날짜
    idx: {
        type: Number,
        required: true
    },
    useridx: {
        type: Number,
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
        type: Date,
        default: Date.now,
        required: true
    }
});


const Category = mongoose.model('Category', cateSchema);

module.exports = { Category }