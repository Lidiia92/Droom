import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Pluralize from 'react-pluralize';

import './styles/PersonalInfo.css';
import { pluralize } from 'mongoose';

const PersonalInfo = (props) => {

    const [counter, setCounter] = useState(180);
    const [ending, setEnding] = useState("s");
    const [personalInfo, setPersonalInfo] = useState("")

    function decrementcounter(e) {
        
        setCounter(180 - e.target.value.length);
        pluralize(180 - e.target.value.length);


    }

    function pluralize(counter) {

       if(counter ===  1 ) {
            setEnding("");
        } else {
            setEnding("s");
        }

    }


    return (
        
        <div className="main-background">
            <div className="headings-light">
                <Link to="/" className="brand-light">
                    Droom
                </Link>
                <h1 className="heading-light">Almost done!</h1>
                <h3 className="subheading-light">We just need some additional information to set up your profile.</h3>
            </div>

            <div className="info__form">
                <div className="sections">
                    <div className="active">
                        Personal Information
                    </div>

                    <div>
                        Education & Experience
                    </div>

                    <div>
                        Skills & Interests
                    </div>
                </div>

                <div className="form__wrapper">
                    <form>
                        <div className="input__row">
                            <input className="input-sm" placeholder="First Name"/>
                            <input className="input-sm" placeholder="Last Name"/>
                        </div>

                        <div className="input__row">
                            <textarea onChange={(e) => {
                                setPersonalInfo(e.target.value);
                                decrementcounter(e);
                                // console.log('target', e.target.value, "counter", counter, "about you", personalInfo);
                            }}
                                value={personalInfo} 
                                // onKeyDown={(e) => decrementcounter(e)} 
                                className="input-lg" rows="3" maxLength="180" placeholder="Tell us about yourself"/>
                        </div>

                        <p className="counter" >
                            {counter} character{ending} remaining. 
                        </p>


                    </form>
                </div>
            </div>
        </div>

    );
};

export default PersonalInfo;