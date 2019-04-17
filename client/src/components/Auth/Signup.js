import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {Mutation} from 'react-apollo';
import {SIGNUP_USER} from '../../queries/index';
import NavBar from '../NavBar';
import '../styles/Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Signup = (props) => {

    const [toggler, setToggler] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [userRole, setUserRole] = useState("");
    const [newUser, submitNewUser] = useState({});
    const [newError, setNewError] = useState("");

    async function submitHandler(e, signupUser) {
        if(password !== passwordConfirm) {
            e.preventDefault();
            const errMessage = "Passwords do not match";
            setNewError(errMessage);
            return;
        }
        e.preventDefault();
        
        const registered = await signupUser();
        localStorage.setItem('token', registered.data.signupUser.token);
        localStorage.setItem('uid', registered.data.signupUser.uid);

        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setNewError("");

        props.history.push('/')

    }

    function validateForm() {
        if (!username || !email || !password || !passwordConfirm || !userRole || password !== passwordConfirm) return true;
    }

    const errorStyle = {
        border: '2px solid #ff6666',
    };

    return (
        
        <React.Fragment>
                <div className="signup-bc">
                <NavBar />

                    <div className="form-wrapper">
                        <h2 className="form-heading">Sign Up</h2>
                        <h4 className="form-subheading">It's free and only takes a minute.</h4>

                        <Mutation mutation={SIGNUP_USER} variables={{username: username, password: password, email: email, role: userRole}}>

                            {(signupUser, {data, loading, error}) => {

                                return(

                                    <form className="inputs-wrapper" onSubmit={(e) => submitHandler(e, signupUser)}>
                                        <div className="input-row">
                                            <label className="label" htmlFor="username">Username</label>
                                            <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                                        </div>
                                        <div className="input-row">
                                            <label className="label" htmlFor="email">Email</label>
                                            <input type="email" name="email" id="email" onChange={e => setEmail(e.target.value)} value={email}/>
                                        </div>
                                        <div className="input-row">
                                            <label className="label" htmlFor="email">Password</label>
                                            <input style={newError ? errorStyle : {}} type={toggler ? "text" : "password"} name="password" id="password" onChange={e => setPassword(e.target.value)} value={password}/>
                                            <span className={toggler ? "toggle-green" : "toggle-red"} onClick={() => setToggler(!toggler)}>
                                                {toggler ? <FontAwesomeIcon icon="eye"/> : <FontAwesomeIcon icon="eye-slash"/>}
                                                {toggler ? " Hide Password" : " Show Password"}
                                            </span>
                                        </div>
                                        <div className="input-row mg-12px">
                                            <label className="label" htmlFor="passwordConfirm">Confirm Password</label>
                                            {newError ? <label htmlFor="passwordConfirm" className="error" id="error">{newError}</label> : ""}
                                            <input  style={newError ? errorStyle : {}} type={toggler ? "text" : "password"} name="passwordConfirm" id="passwordConfirm" onChange={e => setPasswordConfirm(e.target.value)} value={passwordConfirm}/>
                                        </div>
                                        
                                        <div className="input-row">
                                            <div className="container">
                                                <h6>I am:</h6>
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="f-option" name="selector" onClick={() => {
                                                                setUserRole("employee")
                                                                console.log(userRole);
                                                                }}/>
                                                            <label htmlFor="f-option">looking for a job</label>
                                                        </li>
                                                    
                                                    <li>
                                                        <input type="radio" id="s-option" name="selector" onClick={() => {
                                                            setUserRole("employer")
                                                            console.log(userRole);
                                                            }}/>
                                                        <label htmlFor="s-option">looking to post jobs.</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="input-row">
                                            <button type="submit" disabled={loading || validateForm()}>Sign Up</button>
                                        </div>

                                        <div className="login-question"><p>Already have an account?<span><Link to="/login" className="login-link"> Login here</Link></span></p></div>
                                    </form>
                                );

                            }}


                        </Mutation>
                    </div>
                </div>

            </React.Fragment>

    );
}

export default withRouter(Signup);