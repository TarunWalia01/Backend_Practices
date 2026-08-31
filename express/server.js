const express = require('express'); // third party module 
const app = express(); // this statement will equivalent to http.createServer()
app.use(express.json());
// Middleware- it is a function that has access to the request object, the response object, and the next function in the chain. 
let students = [
    {
        id: 1,
        name: "Tarun",
        age: 20,
    },
    {
        id: 2,
        name: "Yatin",
        age: 22,
    },
    {
        id: 3,
        name: "Vedansh",
        age: 21,
    },
]
app.get('/students/' /*endpoint*/ , (req, res) => {
    res.json(students)
})



app.get('/students/:id', (req, res) => {
    // console.log(req.params.id)
    const id = parseInt(req.params.id)
    const student=students.find(student =>student.id === id)
    if(!student){
        return res.status(404).json({
            message: "Student not found"
        })
    }
    res.json(student)
})

app.post('/students', (req, res) => {
    const newStudents = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    }
    students.push(newStudents)
    res.status(201).json({
        message: "New Student Added",
        students:newStudents
    })
})

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index=students.findIndex(student=>student.id===id)
    if (index) {
        index.splice(index, 1)
        res.json({
            message: "Student deleted"
        })
    }
})

app.listen(4000, () => {
    console.log("Server is listening.");
})