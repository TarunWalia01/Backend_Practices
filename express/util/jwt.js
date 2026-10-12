const jwt = require('jsonwebtoken')
const generateToken = (user) => {
return jwt.sign(
        {
            id: user._id,
            email:user.email
        },
        process.env.SECRET_KEY,
        {
            expiresIn:'1h'
        }
    )
}

const generateTokenRefresh = (user) => {
    return jwt.sign(
        {
            id: user._id,
            email:user.email
        },
        process.env.SECRET_KEY_REFRESH,
        {
            expressIn:'1h'
        }

    )
}
module.exports={generateToken, generateTokenRefresh}