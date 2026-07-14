import Room from '../models/roomModel.js';
import generateRoomCode from '../utils/generateRoomCode.js';
import bcrypt from 'bcrypt';
async function createRoom(req,res){

    try{
        const {Roomname,password,Roomtype,maxparticipants}=req.body;
        let roomCode=generateRoomCode();
        let existingroom=await Room.findOne({roomCode});
        while(existingroom){
            roomCode=generateRoomCode();
            existingroom=await Room.findOne({roomCode});
        }
        let encryptedPassword=null;
        if(password){
            encryptedPassword=await bcrypt.hash(password, 10);
        }
        const newRoom=await Room.create({
            Roomname,
            password: encryptedPassword,
            roomCode,
            Roomtype,
            maxparticipants,
        });
        res.status(201).json({message:"Room created successfully",newRoom});
    } catch (error) {
        res.status(500).json({message:"Error creating room",error});    
    }
}

async function getRooms(req,res){
    try{
        const rooms=await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({message:"Error fetching rooms",error});    
}
}
export  { createRoom };