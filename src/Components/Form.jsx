import React from 'react';
import {useNavigate} from 'react-router-dom'; 
import axios from 'axios';

function Form (props) {
    const navigate = useNavigate();
    //State for email and password
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    var classname = props.name;
    var buttonClass = "";

    if(classname === "Login") {
        buttonClass = "login btn btn-outline-dark";
    } else if (classname === "Register") {
        buttonClass = "register btn btn-warning";
    }

    function handleChange(e) {
        setEmail(e.target.value);
        setPassword(e.target.value);
    }

    console.log(email);
    console.log(password);

    return (
        <>
            <div className="form">
            <h3>{classname}</h3>
                <form>
                    <div className="email">
                        <label>Email</label>
                        <input type="email" placeholder="Email" id="email" name="email" onChange={handleChange}/>
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange}/>
                    </div>
                    <button className={buttonClass} type="submit" id="submit-form" onClick={() => navigate("/notes")}>{classname}</button>
                </form>
            </div>
        </>
    )
}

export default Form;