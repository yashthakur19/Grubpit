import {GoogleOAuthProvider} from '@react-oauth/google';
import Login from './pages/Login';
function App() {
  const GOOGLE_CLIENT_ID = "678355684672-9l13qj44i9lovtgqktftn4iv2sihkmft.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <div className="App">
      <Login />
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
