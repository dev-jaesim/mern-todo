import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

function Landing() {
    const [IsSignup, setIsSignup] = React.useState<boolean>(false);

    return (
        <>
            <div>
                <Link to={'/lotto'}>Lotto</Link>
            </div>
            <div className='flex w-full h-screen'>
                <div className='w-1/2 max-w-xs mx-auto relative'>
                    <div className='absolute inset-0 m-auto' style={{height: '300px'}}>
                        {IsSignup && <Signup renderLogin={() => setIsSignup(false)} /> || <Login renderSignup={() => setIsSignup(true)} />}
                    </div>
                </div>
                <div className='w-1/2 bg-green-400' />
            </div>
        </>
    );
}

export default Landing;