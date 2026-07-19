import CreateRoomModal from '../components/createroommodal/CreateRoomModal';
import JoinRoomModal from '../components/joinroommodal/JoinRoomModal';  
import Navbar from '../components/navbar/Navbar';
import Notifications from '../components/notifications/Notifications';
import QuickActions from '../components/actions/QuickActions';
import RoomHistory from '../components/history/RoomHistory';
import WelcomeCard from '../components/welcome/WelcomeCard';
import './Dashboard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Dashboard() {
   const [room,setRoom]=useState([]);
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
  const [isJoinRoomModalOpen, setIsJoinRoomModalOpen] = useState(false);
  const navigate=useNavigate();
  async function fetchRooms() {
    try {
      const response = await axios.get('http://localhost:5000/api/room');
      setRoom(response.data);
      console.log('Fetched rooms:', response.data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  }
   useEffect(()=>{console.log("Dashboard Mounted")
    fetchRooms();
    return () => {
      console.log("Dashboard Unmounted");
    }
   },[])

      
   

 
 
    async function handleCreateRoom(RoomData) {
    // Logic to handle room creation can be added here
   
      try{
    const response = await axios.post('http://localhost:5000/api/room', RoomData);
    await fetchRooms(); // Fetch the updated list of rooms after creation
    
    console.log('Response from server:', response.data);
    navigate(`/room/${response.data.newRoom.roomCode}`);
      }
    catch (error) {
      console.error('Error creating room:', error);
    }
    setIsCreateRoomModalOpen(false); // Close the modal after creation
  }
 
    async function handleJoinRoom(RoomData){
      try {
        const response=await axios.post('http://localhost:5000/api/room/join',RoomData);
        setIsJoinRoomModalOpen(false);
        navigate(`/room/${response.data.room.roomCode}`);
        
      }
      catch(err){
        console.log(err);

        alert(err.response?.data?.message || "failed to join room");
      }
    }

  return (
 <main className="dashboard">
    <Navbar />
    <WelcomeCard />
    <QuickActions
     onCreateRoomClick={() => setIsCreateRoomModalOpen(true)}
     onJoinRoomClick={() => setIsJoinRoomModalOpen(true)}
    />
    {isCreateRoomModalOpen && (
        <CreateRoomModal
          isOpen={isCreateRoomModalOpen}
          onCreate={handleCreateRoom} // Pass the handleCreateRoom function to the modal
          onClose={() => setIsCreateRoomModalOpen(false)}
        />
      )}
      {isJoinRoomModalOpen && (
        <JoinRoomModal
          isOpen={isJoinRoomModalOpen}
          onJoin={handleJoinRoom(RoomData)}
          onClose={() => setIsJoinRoomModalOpen(false)}
        />
      )}
    
    
    <div className="dashboard-content">
        <RoomHistory room={room} />
        <Notifications />
    </div>
    
</main>
  );
}

export default Dashboard;