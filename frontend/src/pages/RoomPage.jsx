import './RoomPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Input from '../components/room/input/input';
import OutputWin from '../components/room/output/outputwin';
import Navbar from '../components/room/roomNavbar';
import Chat from '../components/room/chat';
import Users from '../components/room/users';
function RoomPage(){
    return (
        <main>
            <Navbar/>
            <Users/>
            <Input/>
            <OutputWin/>
            <Chat/>

        </main>
    );  

}

export default RoomPage;