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
router.put("/update/:id", async (req,res) => {

    
    // console.log(req.body,req.params.id,'update area')

    // let params = req.params.id

    // let stat = await hotel.findById(params);

    // console.log(stat)


    try{
        // updating the req.body
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)
    }
    catch(err){
        res.status(404).json({
            msg: `the hotel was not found or this ${err}`
        })
    }


})



// delete
router.delete("/:id", async (req,res) =>{

    try{
         await hotel.findByIdAndDelete(req.params.id)
         res.status(200).json({
             msg:'the information has been successfully deleted'
         })

    }

    catch(err){

        res.status(404).json({
            msg:'what you are looking for doesnt exist'

        })
         
    }
})



// get a single hotel



// get all the hotels



router.get('/:id',  async (req,res) =>{

    try{
        const singleHotel = await hotel.findById(req.params.id)
        res.status(200).json({
            msg:'hotel found',
            singleHotel
        })
    }
    catch(err){

        res.status(404).json({
            msg:"their isn't a hotel that matches this database"
        })
    }

})

//  find all the hotels

router.get("/", async (req,res) =>{

    try{
       let hotels = await hotel.find()
        res.status(200).json({
            msg:'list of hotels',
            hotels,

        })

    }

    catch(err){
        res.status(400).json({
            msg:'their is a technical problem going on '
        })

    }
})



module.exports = router