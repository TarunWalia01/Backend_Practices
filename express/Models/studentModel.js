mongoose = require('mongoose');
const students = mongoose.Schema({
    user:
    {
        type: String,
        required:true
    },
    age:
    {
        type: Number,
        required:true
    },
    course:
    {
        type: String,
        required:true
    }
})

module.exports= mongoose.model('students', students)
