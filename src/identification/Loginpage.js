import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();  

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (username === 'admin' && password === 'admin') {
            onLogin('admin');
            setError('');
            navigate('/info'); 
        } else if (username === 'user' && password === 'user') {
            onLogin('user');
            setError('');
            navigate('/employepage'); 
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h2 className='Titel-h2'>Login</h2>
                <div className='form-group'>
                    <label className='username-login'>Username: </label>
                    <input
                        className='input-login'
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label className='username-login'>Password: </label>
                    <input
                        className='input-login'
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='btn3' type="submit">Login</button>
                {error && <p className='error-message'>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
