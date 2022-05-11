const express = require('express');
const { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotels } = require('../controllers/hotel');
const hotel = require('../models/hotel');
const {createError}= require('../utils/error');
const { verifyAdmin } = require('../utils/verifyToken');


const router = express.Router();


// creates
router.post("/",verifyAdmin,createHotel)


// console.log(req.body)

    // if(!req.body){
    //     return  res.status(500).json({
    //         msg:"Feel out the information"
    //     })
    // }

    // const newHotel = new hotel (req.body)


    // try{
      
    //     const savedHotel = await newHotel.save()
    //     res.status(200).json(savedHotel);


    // }

    // catch(err){
    //     res.status(500).json(err);

    // }



// updates the hotel
router.put("/update/:id",verifyAdmin,updateHotel)



// delete
router.delete("/:id",verifyAdmin,deleteHotel)



// get a single hotel


router.get('/:id', getSingleHotel)

//  find all the hotels

router.get("/", getAllHotels)



module.exports = router