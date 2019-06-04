import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './styles/PersonalInfo.css';



const Experience2 = (props) => {

    const errorStyle = {
        background: '#ffd1d1',
    };

    return (

        
        <div className="main-background pd-bottom-lg">
            <div className="headings-light">
                <Link to="/" className="brand-light">
                    Droom
                </Link>
                <h1 className="heading-light">Almost done!</h1>
                <h3 className="subheading-light mg-top-lg">We just need some additional information to set up your profile.</h3>
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

                <h3 className="sections left-heading">Previuos Experience</h3>

                <div className="form__wrapper">

  
                                            

                </div>

            </div>

        </div>

    );
};

export default Experience2;