const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc : {
        type: String
    },
    img : {
        type: String
    },
    imgTitle : {
        type: String
    },
    trailer : {
        type: String
    },
    video : {
        type: String
    },
    year : {
        type: Number
    },
    limit : {
        type: String
    },
    genre : {
        type: String
    },
    isSeries : {
        type: Boolean,
        default: false
    },
}, {
    timeStamps : false
})


module.exports = mongoose.model('movie',MovieSchema)