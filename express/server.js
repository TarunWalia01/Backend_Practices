require('dotenv').config()
mongoose=require('mongoose')
const express = require('express'); 
const app = express(); 
const studentRoutes=require('./Routes/student.js')
// const teacherRoutes = require('./Routes/teacher.js')
const db=require('./Database/db.js')
const PORT = process.env.PORT || 4000
const authRoutes = require('./Routes/authRoute.js')


app.use(express.json());

app.use((req, res, next) => {
    console.log("Requested URL" , req.originalUrl);
    console.log("Request Type", req.method);
    console.log("Date", Date.now());
    next();
})



app.use('/student', studentRoutes)
// app.use('/teacher', teacherRoutes)
app.use('/authroute', authRoutes)

app.listen(PORT, () => {
    console.log("Server is listening.");
})