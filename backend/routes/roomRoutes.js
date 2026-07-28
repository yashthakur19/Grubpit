import express from "express";
const router=express.Router();

import {
    createRoom,
    getRooms,
    joinRoom,
    getRoom
} from "../controllers/roomController.js";

router.post("/",createRoom);

router.get("/",getRooms);

router.post("/join",joinRoom);

router.get("/:roomCode",getRoom);

export default router;