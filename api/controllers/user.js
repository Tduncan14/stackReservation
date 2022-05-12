const user = require('../models/user');






//  get a single user

exports.getUser = async(req,res,next) => {


    


try{

    const user = await User.findById(req.params.id)
    res.status(200).json({msg:'user is found', user})
}

catch(err){

    res.status(404).json({msg:'user is not found',err})

}

  



}







// delete a single user
exports.deleteUser  = async (req,res,next) => {

    const User = await user.findById(req.params.id)

    if(!User){
        return res.status(404).json({msg:'User is not found'})
    }


    try{
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:'The user was deleted'})
    }


    catch(err){

        res.status(500).json({msg:`this is the ${err}`})
    }




}




// get all users
exports.getAllUser = async (req,res,next) => {


    try{
        const users = await user.find() 
        res.status(200).json(users)

    }

    catch(err){

        res.status(500).json({msg:`this the ${err}`})

    }





}




// update a user

exports.updateUser = async(req,res,next) => {

    console.log('hello')

    const User = await user.findById(req.params.id)


    console.log(user)
    if(!User){
        res.status(404).json({msg:'User is not found'});
    }


    try{
        const UpdateUser = await user.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json({
            msg:'User was updated',
            UpdateUser
        })

    }

    catch(err){
        res.status(404).json({
            msg:`this the ${err}`
        })

    }




}





// // exports.registerUser = async (res,res,next) =>{

// const { JsonWebTokenError } = require("jsonwebtoken")
// const { rawListeners } = require("../models/user")


// //   try{
// //       const salt = bcrypt.genSaltSync(10)
// //       const hash = bcrypt.hashSync(req.body.password,salt)



// //       const newUser = new User ({
// //           username:req.body.username,
// //           email:req.body.email,
// //           password:hash
// //       })



// //       await newUser.save()
// //       newUser.password = null
// //       res.status(200).json({msg:'userhas been created',newUser})





// //   }


// //   catch(err){


// //   }

// // }



// exports.login = async(req,res,next) => {

//     const {username,password} = req.body



//     try{

//         const user = await User.findOne({username:req.body.username})
//         if(!user) return next(createError(404,"user not found"))



//         // comparing password


//         const isPassword = await bcrypt.compare(req.body.password,user.password)



//         jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET)
//         // secure the client info

//         const {password,isAdmin, ...otherDetails} = user._doc


//         res.cookie("access_token",token,{httpOnly:true}).status(200).json(otherDetails)
//     }


//     catch(err){
//         console.log(err)
//     }





// }