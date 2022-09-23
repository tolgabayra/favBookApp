const User = require("../models/user")
const env = require("../configs/config")
env.configenv


const login = async (req, res) => {

}

const register = async (req, res) => {ls
    const user_info = User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const user = await user_info.create()
        res.status(200).json(user)
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