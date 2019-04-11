import React, {  useState } from 'react';
import {Link} from 'react-router-dom';
import './styles/Jumbotron.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Jumbotron = () => {

    const [firstQ, setFirstQ] = useState('')

    function showQuestion1() {
        console.log('test 1');
        setFirstQ('This is the Question');
    }



    return(
        <div className="jumbotron__wrapper">
            <h1 className="jumbotron__header">Welcome, to Droom</h1>
            <p className="jumbotron__subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta consectetur nisl. Sed at vehicula justo.</p>
            <p className="cta"><Link className="cta__button">Get Started!</Link></p>
            <div className="cards">
                <div className="cards__wrapper">
                    <div>
                        <div className="card" ><FontAwesomeIcon className="card-svg" icon="user"/></div>
                        <p className="question">STEP 1: <p>CREATE AN ACCOUNT</p></p>
                    </div>
                    <div>
                        <div className="card"><FontAwesomeIcon className="card-svg" icon="search"/></div>
                        <div className="question">STEP 2: <p>FIND YOUR DREAM JOB</p></div>
                    </div>
                    <div>
                        <div className="card"><FontAwesomeIcon className="card-svg" icon="handshake"/></div>
                        <div className="question">STEP 3: <p>CONGRATULATIONS ON A NEW JOB</p></div>
                    </div>
                </div>
            </div>

            <footer className="footer">© Nothing Fancy Inc 2019</footer>
        </div>
    );
};

export default Jumbotron;