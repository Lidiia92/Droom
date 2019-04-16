import React, {  useState } from 'react';
import {Link} from 'react-router-dom';
import './styles/Jumbotron.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Jumbotron = () => {

    return(
        <div >
            <h2 id="about" className="heading">How does it work?</h2>
            <h3 className="subheading">Take three easy steps towards your dream job!</h3>
            <div className="cards">
                <div className="cards__wrapper">
                    <div>
                        <div className="card" ><FontAwesomeIcon className="card-svg" icon="user"/></div>
                        <p className="question">STEP 1: <p>CREATE AN ACCOUNT</p></p>
                    </div>
                    <div>
                        <div className="card"><FontAwesomeIcon className="card-svg" icon="search"/></div>
                        <div className="question">STEP 2: <p>FIND JOBS YOU LIKE</p></div>
                    </div>
                    <div>
                        <div className="card"><FontAwesomeIcon className="card-svg" icon="handshake"/></div>
                        <div className="question">STEP 3: <p>APPLY WITH ONE CLICK</p></div>
                    </div>
                </div>
            </div>

            <footer className="footer">© Nothing Fancy Inc 2019</footer>
        </div>
    );
};

export default Jumbotron;