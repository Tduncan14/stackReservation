const express = require('express');

const { getAllUser, updateUser, getUser, deleteUser} = require('../controllers/user');
const {verifyToken, verifyUser, verifyAdmin} = require('../utils/verifyToken');
const router = express.Router()



// router.get('/checkauthenication',verifyToken,(req,res,next) =>{


//     res.send('hello user, you are logged in ')



// }
// )


// router.get("/checkuser/:id",verifyAdmin, (req,res,next) => {

//     res.send('you can logged in and delete your account')



// })


// router.get('/checkadmin/:id', verifyUser,(req,res,next) => {

//     res.send('hello admin, you are logged in and you can delete any account')
// })


router.get('/', getAllUser) 

router.get('/:id',verifyUser,getUser)


router.put('/update/:id',verifyUser,updateUser)


router.delete('/delete/:id',verifyUser,deleteUser)






module.exports = router;