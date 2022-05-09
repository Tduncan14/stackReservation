const express = require('express');
const hotel = require('../models/hotel');


const router = express.Router();


// creates
router.post("/", async(req, res) =>{


    console.log(req.body)
    if(!req.body){
        return  res.status(500).json({
            msg:"Feel out the information"
        })
    }

    const newHotel = new hotel (req.body)


    try{
      
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel);


    }

    catch(err){
        res.status(500).json(err);

    }


})



//update
router.put("/:id", async (req,res) => {


    try{
        // updating the req.body
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json(updatedHotel)
    }
    catch(err){
        res.status(404).json({
            msg: `the hotel was not found or this ${err}`
        })
    }


})



// delete
// get a single hotel
// get all the hotels



router.get('/', (req,res) =>{



    res.send('this is the hotels apis');
})



module.exports = router