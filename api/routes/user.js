const express = require('express');
const { getAllUser, updateUser, getUser, deleteUser } = require('../controllers/user');

const router = express.Router()



router.get('/',getAllUser) 

router.get('/:id',getUser)


router.put('/update/:id',updateUser)


router.delete('/delete/:id',deleteUser)






module.exports = router;