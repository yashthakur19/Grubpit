import CreateRoomModal from '../components/CreateRoomModal';
import JoinRoomModal from '../components/JoinRoomModal';  
import Navbar from '../components/Navbar';
import Notifications from '../components/Notifications';
import QuickActions from '../components/QuickActions';
import RoomHistory from '../components/RoomHistory';
import WelcomeCard from '../components/WelcomeCard';
function Dashboard() {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is a protected route. Only authenticated users can access this page.</p>
    </div>
  );
}

export default Dashboard;