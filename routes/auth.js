const express = require('express')
const router = express.Router()

const User = require('../models/User')

const jwt = require('jsonwebtoken')

//Register
router.post('/register', async (req,res) => {
    const {username, email , password} = req.body
    
    const newUser = await new User({
        username,
        password,
        email
    })
    try {
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.send(error)
    }
})

//Login
router.post('/login', async (req,res) => {
    const {email, password} = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            res.status(401).json("Invalid Credentials")
        }
        const isMatch = await user.matchPasswords(password)
        if(!isMatch){
            res.status(401).json("Invalid Password")
        }

        const accessToken = jwt.sign(
        {
            id: user._id, isAdmin : user.isAdmin
        }, 
        process.env.SECRET_KEY,
        {
            expiresIn : '1hr'
        })

        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router