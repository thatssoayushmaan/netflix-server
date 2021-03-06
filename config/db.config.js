const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true
    })

    console.log('MongoDB connected')
}

module.exports = connectDB