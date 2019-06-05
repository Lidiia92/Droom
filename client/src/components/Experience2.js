import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';
import './styles/PersonalInfo.css';

import states from '../components/Data/states';

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
                    <form>          
                        <div className="input__row">
                            <input className="input-lg" placeholder="Company Name" />
                        </div>

                        <div className="input__row">
                            <input className="input-lg" placeholder="Job Title" />
                        </div>

                        <div className="input__row">
                            <input className="input-sm" placeholder="City" />
                            <select className="input-sm">
                                {states.map(state => <option key={state.abbreviation}>{state.name}</option>)}
                            </select>
                        </div>

                        <div className="input__row">
                           <div>
                                <div className="date-picker">
                                    <label htmlFor="date-picker1" className="label">Start Date</label>
                                    <DatePicker id="date-picker2"/>
                                </div>

                                <div className="date-picker">
                                    <label htmlFor="date-picker2" className="label">End Date</label>
                                    <DatePicker id="date-picker2"/>
                                </div>
                           </div>

                        </div>

                        <div className="input__row">
                            <p className="add-more" >+ Add New Education</p>
                        </div> 

                        <div className="align-right"> 
                            <button className="button" type="submit">Next</button>
                        </div>

                    </form>
                </div>

            </div>

        </div>

    );
};

export default Experience2;

