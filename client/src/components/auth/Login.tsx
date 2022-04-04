import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface props {
    renderSignup: () => void;
}

function Login({renderSignup}: props) {
    const [Username, setUsername] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const onSubmit = (): void => {
        axios.post('/api/login', { username: Username, password: Password })
            .then(response => {
                if(response.status === 200) {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    navigate('/dashboard', { replace: true });
                } else {

                }
            });
    };
    
    return (
        <div style={{height: '300px'}}>
            <h1 className='text-center text-green-400 font-bold'>Login</h1>
            <div className='mb-4'>
                <label>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} className='w-full border border-gray-400 px-3 py-2 rounded-md mt-1' type='text' placeholder='Username' />
            </div>
            <div className='mb-4'>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='w-full border border-gray-400 px-3 py-2 rounded-md mt-1' type='password' placeholder='Password' />
            </div>            
            <div className='flex justify-between items-center'>
                <div>
                    <p>No account? <span onClick={renderSignup} className='text-green-400 cursor-pointer'>Sign up</span></p>
                </div>
                <button onClick={onSubmit} className='rounded-md px-6 py-3 font-bold bg-green-400 text-white'>Login</button>
            </div>
        </div>
    );
}

export default Login;