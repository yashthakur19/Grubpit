import './JoinRoomModal.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function JoinRoomModal({ isOpen, onClose }) {
    const [roomCode,setRoomCode]=useState('');
    const [pass,setpass]=useState('');
    const navigate=useNavigate();

    if(!isOpen)return null;

    const handleJoinRoom = async () => {
      

        try{
            const response = await axios.post('http://localhost:5000/api/room/join', {
                roomCode: roomCode,
                password: pass
            });
            const data = await response.data;
            if(response.status === 200){
                console.log('Room joined successfully:', data);
                navigate(`/room/${response.data.room.roomCode}`);

                onClose();
            } else {
                setError(data.message || 'Failed to join room');
            }
        }
        catch(error){
            console.error('Error joining room:', error);
            setError('An error occurred while joining the room');
        }

    }
    return (<section className="join-room-modal">
            <h2>Join Room Modal</h2>
            <div className="container">
                Room Code: <input type="text" placeholder="Enter room code" value={roomCode} onChange={(e)=>setRoomCode(e.target)}/>
                Password: <input type="text" placeholder="Enter Password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
                
                <button onClick={handleJoinRoom}> Join Room</button>
                <button onClick={onClose}>Close</button>

            </div>
         </section>);
}
export default JoinRoomModal;