const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    username: {
        type: String, 
        required : true,
        unique : true
    },
    email: {
        type: String, 
        required : true,
        unique : true
    },
    password: {
        type: String, 
        required : true,
    },
    profilePic: {
        type: String, 
        default : ""
    },
    isAdmin : {
        type: Boolean,
        default : false
    }
},{
    timestamps : true
})

UserSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(8)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
    } catch (error) {
        next(error)   
    }
})

UserSchema.methods.matchPasswords = async function(password){
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('user',UserSchema)