import React, { useState } from 'react';


import {Link} from 'react-router-dom';
import './styles/PersonalInfo.css';





const Experience = (props) => {

    
    
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
                    <div >
                        Personal Information
                    </div>

                    <div className="active">
                        Education & Experience
                    </div>

                    <div>
                        Skills & Interests
                    </div>
                </div>

                <div className="form__wrapper">
                
                    <form >
                        <div className="input__row">
                            <input className="input-sm" placeholder="School Name" />
                            <input className="input-sm" placeholder="Degree" />
                        </div>

                        <div className="input__row">
                            <input className="input-lg" placeholder="Field of Study" />
                        </div>

                    </form>

                </div>

            </div>

        </div>

    );
};

export default Experience;