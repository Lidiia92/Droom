import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Signup = () => {

    const [toggler, setToggler] = useState(false);


    return (
        <div className="signup-bc">
            <div className="form-wrapper">
                <h2 className="form-heading">Sign Up</h2>
                <h4 className="form-subheading">It's free and only takes a minute.</h4>
                <div className="inputs-wrapper">
                    <div className="input-row">
                        <label className="label" for="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className="input-row">
                        <label className="label" for="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-row">
                        <label className="label" for="email">Password</label>
                        <input type="password" name="password" id="password" />
                        <span className={toggler ? "toggle-green" : "toggle-red"} onClick={() => setToggler(!toggler)}>
                            {toggler ? <FontAwesomeIcon icon="eye"/> : <FontAwesomeIcon icon="eye-slash"/>}
                            {toggler ? " Hide Password" : " Show Password"}
                        </span>
                    </div>
                    <div className="input-row mg-12px">
                        <label className="label" for="passwordConfirm">Confirm Password</label>
                        <input type="password" name="passwordConfirm" id="passwordConfirm" />
                    </div>
                    
                    <div className="input-row">
                        <div className="container">
                            <h6>I am:</h6>
                                <ul>
                                    <li>
                                        <input type="radio" id="f-option" name="selector" />
                                        <label for="f-option">looking for a job</label>
                                    </li>
                                
                                <li>
                                    <input type="radio" id="s-option" name="selector" />
                                    <label for="s-option">looking to post jobs.</label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="input-row">
                        <button>Sign Up</button>
                    </div>

                    <div className="login-question"><p>Already have an account?<span><Link> Login here</Link></span></p></div>
                </div>
            </div>
        </div>
    );
}

export default Signup;