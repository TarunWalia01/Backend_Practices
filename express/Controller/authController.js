const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt=require("../util/jwt.js")

const regUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const user = await Users.findOne({
      email: email
    });

    if (user) {
      return res.status(200).json({
        message: "User already exists",
      });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      name: name,
      email: email,
      password: hashPass,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "User not created",
    });
  }
}
module.exports=regUser