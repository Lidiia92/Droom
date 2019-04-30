import React, { useState } from 'react';


import {Link} from 'react-router-dom';
import './styles/PersonalInfo.css';




const Experience = (props) => {

    const [counter, setCounter] = useState(0)
    const [educationArray, setEducationArray] = useState([0]);

    function addEducation(newCounter) {

        setCounter(newCounter + 1);
        console.log(counter);
        setEducationArray([...educationArray, newCounter + 1]);
        console.log(educationArray);
    }

    function removeEducation(e, educationVal) {
        e.preventDefault();
        //setCounter(newCounter - 1);
        console.log('value', educationVal);
        setEducationArray(educationArray.filter((item) => item !== educationVal))
        
    }


    console.log('test2', counter, educationArray);
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

                    {educationArray.map((education, index) => {
                        return (
                            <form key={education} className={index !== 0 ? `slide-fade slide-fade-show` : ''}>
                                <div className="input__row">
                                    <input className="input-sm" placeholder="School Name" />
                                    <input className="input-sm" placeholder="Degree" />
                                </div>

                                <div className="input__row">
                                    <input className="input-lg" placeholder="Field of Study" />
                                </div>

                                <div className="input__row">
                                        <div className="labeled__input">
                                            <label htmlFor="startDate" className="label">From Year</label>                 
                                            <input id="startDate"  placeholder="Year" />  
                                        </div>
                                        <div className="labeled__input">
                                            <label htmlFor="startDate" className="label">To Year</label>
                                            <input id="startDate"  placeholder="Year" />                   
                                        </div>
                                </div> 

                                <button className="button" type="submit">Save</button>
                                {index !== 0 ? <button className="button btn-red" onClick={(e) => removeEducation(e, education)}>Cancel</button> : null}  

                            </form>
                        );
                    })}
                

                    <div className="input__row">
                        {educationArray.length === 4 ? null : <p className="add-more" onClick={ () => addEducation(counter)}>+ Add New Education</p>}
                    </div>  

                </div>

            </div>

        </div>

    );
};

export default Experience;