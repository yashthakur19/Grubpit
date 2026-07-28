import Room from '../models/Room.js';
import generateRoomCode from '../utils/generateRoomCode.js';
import bcrypt from "bcrypt";

export async function createRoom(req,res){

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
            category,
            maxparticipants,
        });
        res.status(201).json({message:"Room created successfully",newRoom});
    } catch (error) {
        res.status(500).json({message:"Error creating room",error});    
    }
}

export async function getRooms(req,res){
    try{
        const rooms=await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({message:"Error fetching rooms",error});    
}
}

export async function joinRoom(req,res){
    try{
        const {roomCode,password}=req.body;
        const room=await Room.findOne({roomCode});
        if(!room){
            return res.status(404).json({message:"Room not found"});
        }
        if(room.password){
         const isPasswordValid=await bcrypt.compare(password,room.password);
         if(!isPasswordValid){
            return res.status(401).json({message:"Invalid password"});
         }
         return res.status(200).json({
            message:"Room found",
    room: {
        roomCode: room.roomCode,
        roomName: room.Roomname,
        roomType: room.category
    }
         })
        }
    } catch (error) {
        res.status(500).json({message:"Error joining room",error});
    }
}
export async function getRoom(req,res){
    try{
        const {roomCode}=req.params;

        const roomAvailable= await Room.findOne({roomCode});

        if(roomAvailable){
            return res.status(200).json({
                success:true,
                roomName:roomAvailable.Roomname,
                roomCode:roomAvailable.Roomcode,
                roomType:roomAvailable.Roomtype
            });
        }

        return res.status(404).json({
            success:false,
            message:"Room not found"
        });
    }
    catch(error){
        console.error("Error in getRoom controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error."
    });
    }
}

