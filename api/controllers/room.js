
const  Hotel = require( '../models/hotel');
const room = require('../models/room');
const Room = require('../models/room');
const { createError } = require('../utils/error');




//  creating rooms

exports.createRoom = async(req,res,next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)



    try{
        const savedRoom = await newRoom.save()
        await Hotel.findByIdAndUpdate(hotelId,{$push : {rooms:savedRoom._id}}) 
        res.status(200).json(savedRoom)
    }
    catch(err){
       next(err)
    }


}





exports.updateRoom = async (req,res,next) => {

    try{
        const updateRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})

        res.status(200).json({msg:'the room has been saved and updated', updateRoom})
    }


    catch(err){

        res.status(404).json({
            msg:`this is the ${err}`,
            err
        })
    }

}




exports.deleteRoom = async (req,res,next) => {

    const hotelId = req.params.hotelId


    console.log(hotelId,req.params.id)
    


    try{
        await room.findByIdAndDelete(req.params.id)

        try{
            await Hotel.findByIdAndUpdate(hotelId , {$pull:{rooms:req.params.id}})
            
   
        }


        catch(err){
            console.log(`this is the ${err}`)
        }
        res.status(200).json({msg:'the room is deleted'})
    }

    catch(err){

        res.status(404).json('room was not deleted')


    }




}

exports.getAllRooms = async(req,res,next) => {

     try{
          const findAll = Room.find()
          res.status(200).json({
              msg:'hotels found',
              findAll
          })
     }

     catch(err){

        res.status(500).json({
            msg:`this is the error ${err}`
        })

     }
}



exports.getRoom = async (req,res,next) => {

    try{
        const getRoom = await Room.findById(req.params.id)

        res.status(200).json({
            msg:` it was a success`,
            getRoom
        })
    }

    catch(err){
        res.status(404).json({
            msg:'this is the error',
            err,
        })
    }
}