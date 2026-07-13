import Room from '../models/roomModel.js';
import generateRoomCode from '../utils/generateRoomCode.js';
async function createRoom(req,res){

    try{
        const roomCode=generateRoomCode();
        const {Roomname,password,Roomcode,Roomtype,maxparticipants}=req.body;
        const newRoom=await Room.create({
            Roomname,
            password,
            roomCode,
            Roomtype,
            maxparticipants,
        });
        res.status(201).json({message:"Room created successfully",newRoom});
    } catch (error) {
        res.status(500).json({message:"Error creating room",error});    
    }
}
export default {createRoom};