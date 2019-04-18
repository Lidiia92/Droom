import React, {  useState } from 'react';
import {Link} from 'react-router-dom';
import './styles/Jumbotron.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Jumbotron = () => {

    return(
        <div >
            <h2 id="about" className="heading">How does it work?</h2>
            <div className="cards">
                <div className="cards__wrapper">
                    <div>
                        <div className="card" ><FontAwesomeIcon className="card-svg" icon="user"/></div>
                        <p className="question">Step 1: <p>Create professinal or business account.</p></p>
                    </div>
                    <div>
                        <div className="card"><FontAwesomeIcon className="card-svg" icon="search"/></div>
                        <div className="question">Step 2: <p>Find the best jobs near you or find an applicant that is most qialified for the role.</p></div>
                    </div>
                    <div>
                        <div className="card"><FontAwesomeIcon className="card-svg" icon="handshake"/></div>
                        <div className="question">Step 3: <p>Apply to your ideal company or contact the job-seaker with one click.</p></div>
                    </div>
                </div>
            </div>

            <footer className="footer">© Nothing Fancy Inc 2019</footer>
        </div>
    );
};

export default Jumbotron;