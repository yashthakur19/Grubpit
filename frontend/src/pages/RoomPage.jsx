import './RoomPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Input from '../components/room/input';
import OutputWin from '../components/room/output';
import Navbar from '../components/room/roomNavbar';
import Chat from '../components/room/chat';
import Users from '../components/room/users';
function RoomPage(){
    const { roomCode }=useParams();
    const [room,setRoom]=useState(null);
    
   
    async function fetchRoom(){
        try{
            const response = await axios.get(`http://localhost:5000/api/room/${roomCode}`);
            setRoom(response.data.room);
        }
        catch(err){
            console.error(err);
            alert("error occured");
        }
    }
     useEffect(()=>{
        fetchRoom();
    },[roomCode]);
    return (
        <main>

            <Navbar room={room}/>
            <Users/>
            
            <Input/>
            <OutputWin/>
            <Chat/>

        </main>
    );  

}

export default RoomPage;