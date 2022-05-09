const mongoose = require('mongoose');




const HotelSchema =  new mongoose.Schema ({

    name:{
        type:String,
        required:true,
        trim:true
    },
    type:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    photos:{
        type:[String],
        
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String]
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }

})




 const hotel = mongoose.model('hotel', HotelSchema);


module.exports = hotel