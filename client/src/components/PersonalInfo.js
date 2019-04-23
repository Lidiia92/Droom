import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import Drop from './Dropzone';
import "react-datepicker/dist/react-datepicker.css";

import {Link} from 'react-router-dom';
import './styles/PersonalInfo.css';

import states from '../components/Data/states';



const PersonalInfo = (props) => {

    const [counter, setCounter] = useState(180);
    const [ending, setEnding] = useState("s");
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        aboutYou: "",
        DOB: new Date(),
        avatar: {},
        city: ""
    });

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

    const errorStyle = {
        background: '#ffd1d1',
    };

    function uploader(e) {
        const files = Array.from(e.target.files)
    
        const formData = new FormData()
    
        
        files.forEach((file, i) => {
          formData.append(i, file)
        });

        console.log(files[0]);

        return files[0];
    }

    function onDrop(file) {
        setPersonalInfo({...personalInfo, avatar: file})
    }

    console.log(personalInfo);
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
                            <input className="input-sm" placeholder="First Name" value={personalInfo.firstName} onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}/>
                            <input className="input-sm" placeholder="Last Name" value={personalInfo.lastName} onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}/>
                        </div>

                        <div className="input__row">
                            <textarea onChange={(e) => {
                                setPersonalInfo({...personalInfo, aboutYou: e.target.value});
                                decrementcounter(e);
                            }}
                                value={personalInfo.aboutYou} 
                                style={counter === 0 ? errorStyle : {}}
                                className="input-lg" rows="3" maxLength="180" placeholder="Tell us about yourself"/>
                        </div>

                        <p className="counter" >
                            {counter} character{ending} left 
                        </p>

                        <div className="input__row">
                            <div  className="label">
                                <label htmlFor="date-picker" className="label">Select Your Date of Birth</label>
                                <DatePicker 
                                id="date-picker"
                                selected={personalInfo.DOB}
                                onChange={(e) => setPersonalInfo({...personalInfo, DOB: e})}
                                />
                            </div>

                            <div className="label label-wide">
                                <label for="file-upload" className="label file-upload">Upload Your Photo</label>
                                <input id="file-upload" type="file" className="upload" 
                                onChange={(e) => setPersonalInfo({...personalInfo, avatar: uploader(e)})}/>
                            </div>

                        </div>
                        
                        <div className="input__row">

                            <div  className="label">
                                <label htmlFor="city" className="label">Your Town/City</label>
                                <input id="city" type="text" value={personalInfo.city} 
                                       onChange={(e) => setPersonalInfo({...personalInfo, city: e.target.value})}/>  
                            </div>

                            <div  className="label label-wide">
                                <label htmlFor="select" className="label file-upload">Select Your State</label>
                                <select id="select" onChange={(e) => setPersonalInfo({...personalInfo, state: e.target.value})}>
                                {states.map(state => <option key={state.abbreviation}>{state.name}</option>)}
                                </select>
                            </div>
                        </div>

                    <p className="button-align"><button className="button" type="submit">Next</button></p>
                    </form>
                </div>
            </div>

            <Drop onDrop={onDrop}/>
        </div>

    );
};

export default PersonalInfo;