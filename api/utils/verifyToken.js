const jwt = require('jsonwebtoken');
const { createError } = require('./error');



// verifying the token

exports.verifyToken = (req,res,next) => {

    const token  = req.cookies.access_token;

    if(!token){
        return next(createError(401,"you are not authenicated"))
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,user) =>{
        if(err){
            return next(createError(403,'Token is not valid'))
        }

        req.user = user;
        next()
    })


}


exports.verifyUser = (req,res,next) => {

    this.verifyToken(req,res,next,()=>{


        // check if its the user or not
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }

        else{
            return next(createError(403,'you are not authorized'))
        }
    })


}


//  see if the user isAdmin


exports.verifyAdmin = (req,res,next) => {

    this.verifyToken(req,res,next, () => {


        if(req.user.isAdmin){
            next()
        }

        else{
            return next(createError(403,"you are not authorized"))
        }
    })






}