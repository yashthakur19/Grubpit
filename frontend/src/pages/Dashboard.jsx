import CreateRoomModal from '../components/createroommodal/CreateRoomModal';
import JoinRoomModal from '../components/joinroommodal/JoinRoomModal';  
import Navbar from '../components/navbar/Navbar';
import Notifications from '../components/notifications/Notifications';
import QuickActions from '../components/actions/QuickActions';
import RoomHistory from '../components/history/RoomHistory';
import WelcomeCard from '../components/welcome/WelcomeCard';
import './Dashboard.css';
import { useState } from 'react';
function Dashboard() {
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
  const [isJoinRoomModalOpen, setIsJoinRoomModalOpen] = useState(false);
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
        <RoomHistory />
        <Notifications />
    </div>
    
</main>
  );
}

export default Dashboard;