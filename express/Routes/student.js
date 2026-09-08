const checkRole = require('../Middleware/role_ware')

const express = require('express'); // third party module
const app = express(); // this statement will equivalent to http.createServer()
const router = express.Router(); // this statement will equivalent to http.createServer()
app.use(express.json());
// Middleware- it is a function that has access to the request object, the response object, and the next function in the chain.
// someone who sits in between client and server

router.use((req, res, next) => {
    console.log("Router Middleware Executed");       // for checking  requests and authentication
    next();
})
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
router.get('/' , checkRole('admin', 'teacher', 'student'), (req, res) => {
    res.json(students)
})

router.get('/search',checkRole('admin', 'teacher', 'student'), (req, res) => {
    const name = req.query.name
    const age = req.query.age
    
    const stud=students.filter(s=>s.name.toLowerCase()===name.toLowerCase() && s.age===Number(age))
    res.json(stud)
})

router.get('/:id',checkRole('admin', 'teacher', 'student'), (req, res) => {
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

router.post('/', checkRole('admin', 'teacher'),  (req, res) => {
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

router.delete('/:id',checkRole('admin'),  (req, res) => {
    const id = parseInt(req.params.id)
    const index=students.findIndex(student=>student.id===id)
    if (index!==-1) {
        students.splice(index, 1)
        res.json({
            message: "Student deleted"
        })
    } else {
        res.status(404).json({ message: "Student not found" })
    }
})


//if you want to change all the details of student then use put method
router.put('/:id', checkRole('admin', 'teacher') , (req, res) => {
    const id=parseInt(req.params.id)
    const stud = students.find(student => student.id === id);
    if (!stud) {
        res.status(404).json({
            message:"Student not found"
        })
    }
    stud.name=req.body.name;
    stud.age = req.body.age;
    res.json({
        message: "Student updated"
    })
})

// if you wan to change the only particular detail of student then use patch method
router.patch('/:id',checkRole('admin', 'teacher'),  (req, res) => {
    const id = parseInt(req.params.id)
    const stud = students.find(student => student.id === id);
    if (!stud) {
        res.status(404).json({
            message:"Student not found"
        })
    }
    if (req.body.name !== undefined) {
        stud.name = req.body.name;
    }
    if (req.body.age !== undefined) {
        stud.age = req.body.age;
    }
    res.json({
        message: "Student updated"
    })
    
})


// router.listen(4000, () => {
//     console.log("Server is listening.");
// })

module.exports=router