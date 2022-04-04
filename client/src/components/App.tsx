import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/Landing';
import Lotto from '../pages/Lotto';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path='/lotto' element={<Lotto />} />
        </Routes>
    );
}

export default App;