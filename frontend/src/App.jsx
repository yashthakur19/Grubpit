import {GoogleOAuthProvider} from '@react-oauth/google';
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import RoomPage from './pages/RoomPage';
function App() {

  const GOOGLE_CLIENT_ID = "678355684672-9l13qj44i9lovtgqktftn4iv2sihkmft.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider ClientId={GOOGLE_CLIENT_ID}>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/room/:roomCode" element={<RoomPage/>}/>
      </Routes>
       </BrowserRouter>
      </GoogleOAuthProvider>
  );
}

export default App;
