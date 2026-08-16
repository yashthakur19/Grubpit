import './RoomPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Input from '../components/room/input';
import OutputWin from '../components/room/output';
import Navbar from '../components/room/roomNavbar';
import Chat from '../components/room/chat';
import Users from '../components/room/users';

function RoomPage() {
    const { roomCode } = useParams();
    const [room, setRoom] = useState(null);

    async function fetchRoom() {
        try {
            const response = await axios.get(`http://localhost:5000/api/room/${roomCode}`);
            setRoom(response.data.room);
        } catch (err) {
            console.error(err);
            alert("Error occurred while fetching room");
        }
    }

    useEffect(() => {
        fetchRoom();
    }, [roomCode]);

    return (
        <main className="room-container">
            <Navbar room={room} />
            
            <div className="workspace">
                <aside className="users-pane">
                    <Users />
                </aside>

                <section className="editor-pane">
                    <div className="code-editor">
                        <Input />
                    </div>
                    <div className="console-output">
                        <OutputWin />
                    </div>
                </section>

                <aside className="chat-pane">
                    <Chat />
                </aside>
            </div>
        </main>
    );
}

export default RoomPage;