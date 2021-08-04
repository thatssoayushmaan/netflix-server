const mongoose = require('mongoose')

const ListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type : {
        type: String
    },
    genre : {
        type: String
    },
    content : {
        type: Array
    },
}, {
    timeStamps : false
})


module.exports = mongoose.model('List',ListSchema)