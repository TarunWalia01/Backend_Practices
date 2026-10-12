// Role based , what i can acceess is used here.
const checkRole = (...allowedRoles) => {
    return (req, res, next) => {
        const role= req.headers.role
        if (!req.user) {
            return res.status(401).json({
                message: "Please Provide a Valid Role"
            })
        }
        if (allowedRoles.includes(role)) {
            next();
        } else {
            return res.status(404).json({
                message: "Not allowed"
            })
        }

    }
    
}
module.exports=checkRole
