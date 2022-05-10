const hotel = require('../models/hotel');

exports.createHotel = async (req,res,next) => {

    const newHotel = new hotel(req.body);



    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    }

    catch(err){
        res.status(500).json(err)
        next(err)
    }

}


// updates the hotel


exports.updateHotel = async (req,res,next) => {

    
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


}


// delete hotels


exports.deleteHotel = async (req,res,next) =>{

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
}



exports.getSingleHotel =  async (req,res,next) =>{


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

}



exports.getAllHotels = async (req,res,next) =>{




   try{
      let hotels = await hotel.find()
       res.status(200).json({
           msg:'list of hotels',
           hotels,

       })

   }

   catch(err){

 
       // res.status(400).json({
       //     msg:'their is a technical problem going on '
       // })

   }
}