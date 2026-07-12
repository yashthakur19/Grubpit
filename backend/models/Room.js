import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    Roomname: {
        type:String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    Roomcode: {
        type: String,
        required: true,
    },
    Roomtype: {
        type: String,
        required: true,
    },
    maxparticipants: {
        type: Number,
        required: true,
    },
    currentparticipants: {
        type: Number,
        default: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    users: {
        type: [String],
        default: [],
    },
},
    
{timestamps: true,}
);
const Room = mongoose.model('Room', roomSchema);
export default Room;