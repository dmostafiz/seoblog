const mongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        trim: true,
        required: true,
        max: 32,
        unique: true,
        index:true,
        lowercase:true
    },
    name: {
        type:String,
        trim: true,
        required: true,
        max: 32
    },
    email: {
        type:String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
    },
    profile: {
        type:String,
        required: true,
    },

    hashed_password: {
        type: String,
        required:true
    },

    salt: Number,

    about: {
       type: String
    },

    role: {
        type: Number,
        trim: true
    },

    photo: {
        data: Buffer,
        contentType: String
    },
    resetPasswordToken:{
        data: String,
        default: '',

    }
}, {timestamp: true})



module.exports = mongoose.model('User', userSchema)