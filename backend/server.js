const express=require("express");
const app=express();
const cors=require('cors');
const port=process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Server is running');
});
app.post('/api/room',(req,res)=>{
    const roomData=req.body;
    console.log('Received room data:', roomData);
    res.status(200).json({ message: 'Room data received successfully' });
});
app.listen(port, ()=>{
    console.log('Server is running on port',port);
})