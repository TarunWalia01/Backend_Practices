mongoose = require('mongoose')
const users = mongoose.schema({
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
    }
})

module.exports=mongoose.model('users', users)

