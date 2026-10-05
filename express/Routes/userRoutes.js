const router= express.json();
const express = require('express'); // third party module

const checkRole = require('../Middleware/role_ware')

const Users = require('../Models/userModel.js')
const { router } = require('../Routes/userRoutes.js')
const bcrypt= require('bcrypt')




router.get('/', (req, res) => {
    const { token } = req.cookies
    if (!token) {
        res.status(401).json({
            message:"Please login to access this page"

        })
    }
    res.status(200).json({
        message: "Welcome to the home page"
    });

})

router.post('/createUser', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) { 
        req.status(400).json({
            message:"All fields are required"
        })
    }
    const user = Users.find({
        name: name,
        email: email,
    })

    if(user){
        req.status(400).json({
            message:"User already exists"
        })
    }
    const hashPass= await bcrypt.hash(password,10)
    const newUser = await Users.create({
        name: name,
        email: email,
        password: hashPass,
    })

    if (!newUser) {
        res.status(400).json({
            message: "User not created"
        })
    }
    res.status(201).json({
        message:"User created successfully"
    })
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                message: "All fields are required"
            })
        }

        const existingUser = await Users.findOne({
            email: email
        })
        if (!existingUser) {
            res.status(400).json({
                message: "User not found"
            })
        }

        const isMatch = await bcrypt.compare(password, existingUser.password)
        if (!isMatch) {
            res.status(400).json({
                message: "Invalid password"
            })
        }
        res.status(200).json({
            message: "User logged in successfully",
            user: {
                name: existingUser.name,
                email: existingUser.email

            }
        })
    } catch (error) {
        res.status(400).json({
            message:"Error occured"
        })
    }
})