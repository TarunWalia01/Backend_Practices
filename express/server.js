const express = require('express'); 
const app = express(); 

app.use(express.json());

const studentRoutes=require('./Routes/student.js')
const teacherRoutes = require('./Routes/teacher.js')

app.use('/student', studentRoutes)
app.use('/teacher', teacherRoutes)

app.listen(4000, () => {
    console.log("Server is listening.");
})