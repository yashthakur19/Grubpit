const express=require("express");
const app=express();
const cors=require('cors');
const connectDB=require('./config/db');
connectDB();
const port=process.env.PORT || 5000;
const rooms=[];
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Server is running');
});
app.post('/api/room',(req,res)=>{
    const roomData=req.body;
    rooms.push(roomData);

    console.log('Received room data:', roomData);
    res.status(200).json({ message: 'Room data received successfully' });
});
app.get('/api/room',(req,res)=>{
    res.status(200).json(rooms);
    console.log('Sending room data:', rooms);   
});
app.listen(port, ()=>{
    console.log('Server is running on port',port);
})