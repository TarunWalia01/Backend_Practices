// Role based , what i can acceess is used here.
const checkRole = (...allowedRoles) => {
    return (req, res, next) => {
        const role= req.headers.role
        if (!role) {
            return res.status(401).json({
                message: "Please Provide a Valid Role"
            })
        }
        if (allowedRoles.includes(role)) {
            next();
        } else {
            return res.status(404).json({
                message: ""
            })
        }

    }
    
}
module.exports=checkRole
