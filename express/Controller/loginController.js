const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("../util/jwt.js")
const cookieParser = require('cookie-parser');

const loginConroller = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await Users.findOne({
      email: email,
    });
    if (!existingUser) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
      }
      //token entryyyy.................
      
      const token = jwt.generateToken(User)
      res.cookie("token", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 1000,
          secure:process.env.SECURE_KEY
      })
    
    const refToken = jwt.generateTokenRefresh(User)
    const hashToken=bcrypt.hash(refToken,10)
      res.save("refToken", hashToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        secure:process.env.SECURE_KEY_REFRESH
      })
    
      
      
      
    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured",
    });
  }
}
module.exports=loginConroller
