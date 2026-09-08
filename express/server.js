const express = require('express'); 
const app = express(); 
const studentRoutes=require('./Routes/student.js')
const teacherRoutes = require('./Routes/teacher.js')

app.use(express.json());

app.use((req, res, next) => {
    console.log("Requested URL" , req.originalUrl);
    console.log("Request Type", req.method);
    console.log("Date", Date.now());
    next();
})



app.use('/student', studentRoutes)
app.use('/teacher', teacherRoutes)

app.listen(4000, () => {
    console.log("Server is listening.");
})