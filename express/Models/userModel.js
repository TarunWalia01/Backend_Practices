mongoose = require('mongoose')
const users = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type: Number,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String, 
        enum: ['teacher', 'student', 'admin'],
        default:'student'
    },
    refresh:{
        type: String,
        required:true
    }
})

module.exports=mongoose.model('users', users)

