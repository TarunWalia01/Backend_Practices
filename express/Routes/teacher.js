const express = require('express'); // third party module 
const router = express.Router(); // this statement will be equivalent to http.createServer()
router.use(express.json());

// Middleware- it is a function that has access to the request object, the response object, and the next function in the chain. 

let teachers = [
    {
        id: 1,
        name: "Ujjwal",
        age: 35,
    },
    {
        id: 2,
        name: "Tanish",
        age: 40,
    },
    {
        id: 3,
        name: "Tarun",
        age: 38,
    },
]

router.get('/' /* endpoint */, (req, res) => {
    res.json(teachers)
})

router.get('/', (req, res) => {
    const name = req.query.name
    const age = req.query.age
    
    const teacher = teachers.filter(t => 
        t.name.toLowerCase() === name.toLowerCase() && 
        t.age === Number(age)
    )
    res.json(teacher)
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const teacher = teachers.find(teacher => teacher.id === id)
    
    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found"
        })
    }
    
    res.json(teacher)
})

router.post('/', (req, res) => {
    const newTeacher = {
        id: teachers.length + 1,
        name: req.body.name,
        age: req.body.age
    }
    
    teachers.push(newTeacher)
    
    res.status(201).json({
        message: "New Teacher Added",
        teacher: newTeacher
    })
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = teachers.findIndex(teacher => teacher.id === id)
    
    if (index !== -1) {
        teachers.splice(index, 1)
        res.json({
            message: "Teacher deleted"
        })
    } else {
        res.status(404).json({
            message: "Teacher not found"
        })
    }
})

// if you want to change all the details of teacher then use put method
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const teacher = teachers.find(teacher => teacher.id === id);
    
    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found"
        })
    }
    
    teacher.name = req.body.name;
    teacher.age = req.body.age;
    
    res.json({
        message: "Teacher updated"
    })
})

// if you want to change the only particular detail of teacher then use patch method
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const teacher = teachers.find(teacher => teacher.id === id);
    
    if (!teacher) {
        return res.status(404).json({
            message: "Teacher not found"
        })
    }
    
    if (req.body.name !== undefined) {
        teacher.name = req.body.name;
    }
    
    if (req.body.age !== undefined) {
        teacher.age = req.body.age;
    }
    
    res.json({
        message: "Teacher updated"
    })
})

// app.listen(5000, () => {
//     console.log("Server is listening.");
// })

module.exports=router