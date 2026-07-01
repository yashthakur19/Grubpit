import CreateRoomModal from '../components/CreateRoomModal';
import JoinRoomModal from '../components/JoinRoomModal';  
import Navbar from '../components/navbar/Navbar';
import Notifications from '../components/notifications/Notifications';
import QuickActions from '../components/actions/QuickActions';
import RoomHistory from '../components/history/RoomHistory';
import WelcomeCard from '../components/welcome/WelcomeCard';
function Dashboard() {
  return (
  <main>
    <Navbar />
    <div className="welcome-card">
      <WelcomeCard />
    </div>
    <CreateRoomModal />
    <JoinRoomModal />
    <div className="container">
      
      <QuickActions />
      <RoomHistory />
      <Notifications />
    </div>
    
  </main>
  );
}

export default Dashboard;