import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import './styles/PersonalInfo.css';

const PersonalInfo = (props) => {

    const [counter, setCounter] = useState(180);

    function decrementcounter() {
        
        if (counter === 0) return;
        setCounter(counter - 1)
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
                            <textarea onKeyDown={() => decrementcounter()}className="input-lg" rows="3" maxlength="180" placeholder="Tell us about yourself"/>
                        </div>

                        <p className="counter">
                            {counter} charater(s) remaining.
                        </p>


                    </form>
                </div>
            </div>
        </div>

    );
};

export default PersonalInfo;