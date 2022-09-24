const env = require("../configs/config")
const crypto = require("crypto")
const User = require("../models/user")
env.configenv


const login = async (req, res) => {
    const password = req.body.password
    try {
        const user = await User.findOne({
            where: {email: req.body.email, password: req.body.password}
        })
        if(!user){
            res.status(401).json("Email or password not found!!!")
        }
        const dbPassword2 = crypto.createHash('sha256').update(password).digest('base64');
        if(user.password === dbPassword2){
            
        }
    } catch (err) {
        res.status(500).json(err)   
    }

}

const register = async (req, res) => {
    const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
    try {
     

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        req.session.user = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        res.status(201).json(user, req.session.user)
    }
    catch (err) {
        res.status(500).json(err)
    }
}

const logout = async (req, res) => {
    
}


module.exports = {
    login,
    register,
    logout
}