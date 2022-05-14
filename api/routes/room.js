const express = require('express');
const { createRoom, getAllRooms, getRoom, updateRoom, deleteRoom } = require('../controllers/room');
const room = require('../models/room');
const { verifyAdmin } = require('../utils/verifyToken');


const router = express.Router();



// post the room
router.post('/:hotelid',verifyAdmin,createRoom)

// get all rooms
router.get('/room',getAllRooms)

// get a single room
router.get('/:id',getRoom);

// update the room
router.put('/update/:id',updateRoom);

// delete the room
router.delete('/delete/:id/:hotelId',deleteRoom);


module.exports = router