require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./config/db.config')
connectDB()

const cors = require('cors')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user.route')
const movieRoute = require('./routes/movie.route')
const listRoute = require('./routes/list.route')

//Middleware
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use('/api/lists', listRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server up and running at ${PORT}`)
})
