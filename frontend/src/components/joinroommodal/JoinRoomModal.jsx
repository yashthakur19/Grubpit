import './JoinRoomModal.css';
import {useState,useEffect} from 'react';

function JoinRoomModal({ isOpen, onClose }) {
    const [roomCode,setRoomCode]=useState('');
    const [pass,setpass]=useState('');
    const [error,setError]=iseState('');
    const [loading,setLoading]=useState(false);

    if(!isOpen)return null;

    const handleJoinRoom = async () => {
        setError(' ');
        setLoadinf(true);

        try{
            const response = await fetch('http://localhost:5000/api/rooms/')
        }
    }
    return (<section className="join-room-modal">
            <h2>Join Room Modal</h2>
            <div className="container">
                Room Code: <input type="text" placeholder="Enter room code" />
                Password: <input type="text" placeholder="Enter Password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
                
                <button onClick={onClose}> Join Room</button>
                <button onClick={onClose}>Close</button>

            </div>
         </section>);
}
export default JoinRoomModal;