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
router.get('/room/:id',getRoom);

// update the room
router.put('/room/update/:id',updateRoom);

// delete the room
router.delete('/room/delete/:id',deleteRoom);


module.exports = router