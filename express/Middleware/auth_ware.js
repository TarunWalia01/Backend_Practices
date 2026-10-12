const jwt=require("../util/jwt.js")
const authMiddleware = (req, res, next) => {
    const { token } = req.cokkies 
    if (!header) {
        res.status(400).json({
            message:"Token not found"
        })
    }
    const check=jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message:"Invalid Token"
            })
        }
        req.user = decoded
        next();
    })
}