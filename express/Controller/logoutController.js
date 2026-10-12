const logout = async (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(400).json({
            success:"false",
            message:"Token not found"
        })
    }
    res.clearCookies("token");
    return res.status(200).json({
        success:"true",
        message:"Logout Successfully"
    })
}
module.exports=logout