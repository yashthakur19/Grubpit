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
function Dashboard() {
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

      
   

  const [room,setRoom] = useState(()=>{const storedRoom = localStorage.getItem('room');
  return storedRoom ? JSON.parse(storedRoom) : []});
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
  const [isJoinRoomModalOpen, setIsJoinRoomModalOpen] = useState(false);
 
    async function handleCreateRoom(RoomData) {
    // Logic to handle room creation can be added here
   
      try{
    const response = await axios.post('http://localhost:5000/api/room', RoomData);
    await fetchRooms(); // Fetch the updated list of rooms after creation
    setRoom(prevRooms => [...prevRooms, response.data]); // Update the room state with the new room
    console.log('Response from server:', response.data);
      }
    catch (error) {
      console.error('Error creating room:', error);
    }
    setIsCreateRoomModalOpen(false); // Close the modal after creation
  }

  useEffect(() => {
      console.log('Updated room state:', room);
      localStorage.setItem('room', JSON.stringify(room));
      console.log(localStorage.getItem('room'));
    }, [room]);
 
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