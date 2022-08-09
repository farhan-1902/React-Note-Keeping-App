import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Notes from './Notes';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App () {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
    )
}

export default App;