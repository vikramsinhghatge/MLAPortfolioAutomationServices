var LoginService = require('../services/login.service');
var _this = this;

exports.authenticateUser = async function(req, res, next){
    console.log(req.username);

    if(!req.body.username){
        return res.status(400).json({status: 400., message: "Username must be present"})
    }

    if(!req.body.password){
        return res.status(400).json({status: 400., message: "Password must be present"})
    }

    var username = req.body.username,
        password = req.body.password;

    var user = {
        username: req.body.username ? req.body.username : null,
        password: req.body.password ? req.body.password : null
    };

    try{
        var authenticatedUser = await LoginService.authenticateUser(user);
        return res.status(200).json({status: 200, data: authenticatedUser, message: "Succesfully authenticated User"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}
