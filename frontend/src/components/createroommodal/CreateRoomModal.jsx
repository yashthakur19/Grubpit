import './CreateRoomModal.css';
import React,{ useState } from 'react';
function CreateRoomModal({ isOpen, onClose,onCreate }) {
    const [roomName, setRoomName] = useState('');
    const [password, setPassword] = useState('');
    const [category, setCategory] = useState('category1');
    const [maxParticipants, setMaxParticipants] = useState('');
    if (!isOpen) return null;

    function handleSubmit() {
        // Handle room creation logic here
        if (!roomName || !password || !category || !maxParticipants) {
            alert('Please fill in all fields');
            return;
        }
        if(roomName.length < 3 || roomName.length > 20) {
            alert('Room name must be between 3 and 20 characters');
            return;
        }
        if(password.length < 6 || password.length > 20) {
            alert('Password must be between 6 and 20 characters');
            return;
        }
        if(maxParticipants < 2 || maxParticipants > 100) {
            alert('Maximum participants must be between 2 and 100');
            return;
        }
        const roomData = {
            roomName,
            password,
            category,
            maxParticipants
        };
        onCreate(roomData); // Call the onCreate function passed from the parent component
        console.log('Creating room with data:', roomData);
        // Reset form fields after creation
        setRoomName('');
        setPassword('');
        setCategory('category1');
        setMaxParticipants('');
        onClose(); // Close the modal after creation
    }

    return (<section className="create-room-modal"> <h2>Create Room Modal</h2>
    <div className="container">
        Room Name: <input type="text" placeholder="Enter room name" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
        Password: <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        Choose category: <select value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="category1">Projects</option>
            <option value="category2">Leetcode Questions</option>
        </select>
        Maximum Participants: <input type="number" placeholder="Enter maximum participants" value={maxParticipants} onChange={(e) => setMaxParticipants(e.target.value)} />
        <button className="create-button" onClick={handleSubmit}>
            Create
        </button>
        <button className="close-button" onClick={onClose}>
            Close
        </button>
    </div>
    </section>);
}
export default CreateRoomModal;