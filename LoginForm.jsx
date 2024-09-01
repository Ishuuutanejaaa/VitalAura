import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleLogInClick = () => {
        setIsSignUp(false);
    };

    const validateForm = () => {
        if (username.length < 4) {
            alert('Username must be at least 4 characters long.');
            return false;
        }

        if (password.length < 4 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            if (password.length < 4) {
                alert('Password must be at least 4 characters long.');
            } else {
                alert('Password must contain at least one special character (@, #, etc).');
            }
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
            const url = isSignUp ? '/register' : '/login'; // Determine the endpoint based on the action
            const response = await fetch(http://localhost:5000${url}, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }) // Send the credentials
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert(data.message);
                navigate('/'); // Navigate to the home page after successful login
            } else {
                alert(data.message); // Display an error message if the request fails
            }
        }
    };
    

    return (
        <div className='log-body'>
            <div className="background"></div>
            <div className={container ${isSignUp ? 'right-panel-active' : ''}}>
                {/* Sign Up Form */}
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>

                {/* Log In Form */}
                <div className="form-container log-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Log in</h1>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <a href="#">Forgot your password?</a>
                        <button type="submit">Log In</button>
                    </form>
                </div>

                {/* Overlay */}
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                        <img src="/Vital Aura logo.png" alt="logo" />
                            <h1>Welcome back!</h1>
                            <p>Get ready to make yourself more healthy</p>
                            <button className="ghost" onClick={handleLogInClick}>Log In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                        <img src="/Vital Aura logo.png" alt="logo" />
                            <h1>Hello, There!</h1>
                            <p>Don't have an account? Sign Up for free</p>
                            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
