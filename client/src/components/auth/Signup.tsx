import React from 'react';
import axios from 'axios';

interface props {
    renderLogin: () => void;
}

function Signup({renderLogin}: props) {
    const [Username, setUsername] = React.useState('');
    const [Password, setPassword] = React.useState('');
    const [ConfirmPassword, setConfirmPassword] = React.useState('');
    const [Disabled, setDisabled] = React.useState(false);

    React.useEffect(() => {
        if(Password === ConfirmPassword) setDisabled(false);
        else setDisabled(true);
    }, [Password, ConfirmPassword])

    const onSubmit = (): void => {
        axios.post('/api/signup', { username: Username, password: Password })
            .then(response => console.log(response));
    };

    return (
        <div style={{height: '300px'}}>
            <h1 className='text-center text-green-400 font-bold'>Sign up</h1>
            <div className='mb-4'>
                <label>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} className='w-full border border-gray-400 px-3 py-2 rounded-md mt-1' type='text' placeholder='Username' />
            </div>
            <div className='mb-4'>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='w-full border border-gray-400 px-3 py-2 rounded-md mt-1' type='password' placeholder='Password' />
            </div> 
            <div className='mb-4'>
                <label>Confirm Password</label>
                <input onChange={(e) => setConfirmPassword(e.target.value)} className='w-full border border-gray-400 px-3 py-2 rounded-md mt-1' type='password' placeholder='Password' />
            </div>            
            <div className='flex justify-between items-center'>
                <div>
                    <p>Have account? <span onClick={renderLogin} className='text-green-400 cursor-pointer'>Login</span></p>
                </div>
                <button 
                    className={`rounded-md px-6 py-3 font-bold text-white ${Disabled ? 'bg-gray-400' : 'bg-green-400'}`}
                    disabled={Disabled}
                    onClick={onSubmit}
                >
                    Sign up
                </button>
            </div>
        </div>
    );
}

export default Signup;