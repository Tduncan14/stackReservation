const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken');

exports.register = async (req,res,next) =>{






    try{

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt)



        const newUser = new User ({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })

        console.log(newUser,'user')


        await newUser.save()
         newUser.password = null 
         res.status(200).json({msg:'userHas been created',
          newUser})

    }



    catch(err){

    }

}


exports.login = async (req,res,next) => {


    const {username,password} = req.body

    //   if(!password){
    //       return res.status(500).json({
    //           msg:'password or email is empty'
    //       })
    //   }

    //   if(!username){
    //     return res.status(500).json({
    //         msg:'password or email is empty'
    //     })
    // }

    try{

        console.log('hello')
        const user =  await User.findOne({username:req.body.username});
        if(!user) return next(createError(404,"User not found"));


        // comparing password

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)


        if(!isPasswordCorrect){  return next(createError(400,"wrong password or username!"))}


        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT_SECRET)

        const {passsword,isAdmin, ...otherDetails} = user._doc

        // secure the client secret
        res.cookie("access_token",token,{httpOnly:true}).status(200).json(otherDetails)

    }
    catch(err){

        console.log(err)
    }






}