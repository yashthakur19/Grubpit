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
            const reponse = await axios.get('http://localhost:5000/room/api/:roomCode');
            setRoom(Response.data.room);
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

            <Navbar/>
            <Users/>
            <h2>{room?.Roomname}</h2>
<p>{room?.roomCode}</p>
<p>{room?.Roomtype}</p>
            <Input/>
            <OutputWin/>
            <Chat/>

        </main>
    );  

}

export default RoomPage;