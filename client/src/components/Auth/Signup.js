import React from 'react';
import '../styles/Signup.css';

const Signup = () => {
    return (
        <div className="signup-bc">
            <div className="form-wrapper">
                <h2 className="form-heading">Sign Up</h2>
                <h4 className="form-subheading">It's free and only takes a minute.</h4>
                <input placeholder="Username..."/>
            </div>
        </div>
    );
}

export default Signup;