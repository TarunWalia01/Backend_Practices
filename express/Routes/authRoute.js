const express = require('express')
const router = express.Router()
const registeredUser=require('../Controller/authController')
const loginUser = require('../Controller/loginController')

router.post('/register', registeredUser)
router.post('/login', loginUser)

module.exports=router