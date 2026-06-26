import {useState} from 'react';
import {GoogleLogin} from '@react-oauth/google';
import {useNavigate} from 'react-router-dom';
import './login.css';

function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if(!email || !password){
            setError('Please fill in all fields');
            return;
        }

        if(email === 'admin' && password === 'password'){
            alert('Login successful!');
        }else{
            setError('Invalid username or password');
        }
    };
    const handleGoogleLoginSuccess= (credentialResponse) => {
        console.log(credentialResponse);
        navigate('/dashboard');
        };

    const handleGoogleLoginFailure = () => {
        setError('Google login failed. Please try again.');
    }
    
    return(
        <div className="login-container">
        <div className="login-card">
        <h2>Welcome To Grubpit</h2>
        <p>login to your acc</p>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>

        {/* --- GOOGLE SIGN IN DIVISION --- */}
        <div style={{ margin: '1.5rem 0', textTransform: 'uppercase', color: '#aaa', fontSize: '0.8rem' }}>
          <span>or</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <GoogleLogin 
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
        </div>
        {/* ------------------------------- */}
        
        </div>
        </div>
    );
}

export default Login;