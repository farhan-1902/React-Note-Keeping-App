import React from 'react';
import {useNavigate} from 'react-router-dom';

function Card () {
    let navigate = useNavigate();
    
    return (
        <>
        <div className="homecard">
            <h2>Welcome to the Keeper App!</h2>
            <button onClick={() => navigate("/register")} className="register btn btn-warning" type="submit" id="cardregister">Register</button>
            <button onClick={() => navigate("/login")} className="login btn btn-outline-dark" type="submit" id="cardlogin">Login</button>
        </div>
        </>
    )
}

export default Card;