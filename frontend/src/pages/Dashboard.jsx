import CreateRoomModal from '../components/createroommodal/CreateRoomModal';
import JoinRoomModal from '../components/joinroommodal/JoinRoomModal';  
import Navbar from '../components/navbar/Navbar';
import Notifications from '../components/notifications/Notifications';
import QuickActions from '../components/actions/QuickActions';
import RoomHistory from '../components/history/RoomHistory';
import WelcomeCard from '../components/welcome/WelcomeCard';
import './Dashboard.css';
import { useEffect, useState } from 'react';
function Dashboard() {
  c
   useEffect(()=>{console.log("Dashboard Mounted")
    return () => {
      console.log("Dashboard Unmounted");
    }
   },[])

      
   
  function handleCreateRoom(RoomData) {
    // Logic to handle room creation can be added here
    console.log('Room created successfully!');
    
    setRoom([...room, RoomData]);

    setIsCreateRoomModalOpen(false); // Close the modal after creation
  }
  const [room,setRoom] = useState([]);
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
  const [isJoinRoomModalOpen, setIsJoinRoomModalOpen] = useState(false);
 
  useEffect(() => {
      console.log('Updated room state:', room);
      localStorage.setItem('room', JSON.stringify(room));
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