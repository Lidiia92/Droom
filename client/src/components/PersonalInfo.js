import React, { useState } from 'react';
import {Mutation} from 'react-apollo';
import DatePicker from "react-datepicker";
import Drop from './Dropzone';
import "react-datepicker/dist/react-datepicker.css";
import {UPDATE_USER_PERSONAL_INFO} from '../queries/index';

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
        avatar: "",
        city: "",
        state: states[0]
    });

    const [dateAsString, setDateAsString] = useState("");
    const [uid, setUid] = useState(localStorage.getItem("uid"));

    const [newError, setNewError] = useState("");

    function dataString(data) {
        const dataString = JSON.stringify(data);
        console.log(dataString);
        setDateAsString(dataString);
        console.log(dataString);
    }

    async function updateUser(e, updatedInfo) {
        
        if(!personalInfo.firstName || !personalInfo.lastName || !personalInfo.aboutYou || !personalInfo.DOB || !personalInfo.avatar || !personalInfo.city || !personalInfo.state) {
             const errMessage = "Please fill out all fields"
             setNewError(errMessage);
             console.log(errMessage);
             e.preventDefault();
             return;
        }

        e.preventDefault();
        const updated = await updatedInfo();
        props.history.push('/education');
    }

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
                    
                            <Mutation mutation={UPDATE_USER_PERSONAL_INFO} variables={{_id: uid, firstName: personalInfo.firstName, lastName: personalInfo.lastName, aboutYou: personalInfo.aboutYou, DOB: dateAsString, avatar: personalInfo.avatar, city: personalInfo.city, state: personalInfo.state}}>
                                {(updateUserPersonalInfo, {data}) => {
                                    return (

                                        <form onSubmit={(e) => updateUser(e, updateUserPersonalInfo)}>
                                            <div className="input__row">
                                                <input className="input-sm" placeholder="First Name" value={personalInfo.firstName} onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})} style={newError ? errorStyle : {}}/>
                                                <input className="input-sm" placeholder="Last Name" value={personalInfo.lastName} onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})} style={newError ? errorStyle : {}}/>
                                            </div>

                                            <div className="input__row">
                                                <textarea onChange={(e) => {
                                                    setPersonalInfo({...personalInfo, aboutYou: e.target.value});
                                                    decrementcounter(e);
                                                }}
                                                    value={personalInfo.aboutYou} 
                                                    style={counter === 0 || newError ? errorStyle : {}}
                                                    className="input-lg" rows="3" maxLength="180" placeholder="Tell us about yourself"
                                                    />
                                            </div>

                                            <p className="counter" >
                                                {counter} character{ending} left 
                                            </p>

                                            <div className="input__row input__row-column">
                                                <div  className="label label-sm-wide">
                                                    <label htmlFor="date-picker" className="label">Select Your Date of Birth</label>
                                                    <DatePicker 
                                                    id="date-picker"
                                                    selected={personalInfo.DOB}
                                                    onChange={(e) => {setPersonalInfo({...personalInfo, DOB: e}); dataString(personalInfo.DOB)}}
                                                    style={newError ? errorStyle : {}}
                                                    />
                                                </div>

                                                <div  className="label ">
                                                    <label htmlFor="city" className="label">Your Town/City</label>
                                                    <input id="city" type="text" value={personalInfo.city} 
                                                        onChange={(e) => setPersonalInfo({...personalInfo, city: e.target.value})} style={newError ? errorStyle : {}}/>  
                                                </div>

                                                <div  className="label label-wide label-sm-wide">
                                                    <label htmlFor="select" className="label file-upload">Select Your State</label>
                                                    <select id="select" onChange={(e) => setPersonalInfo({...personalInfo, state: e.target.value})}
                                                    style={newError ? errorStyle : {}}
                                                    >
                                                    {states.map(state => <option key={state.abbreviation} >{state.name}</option>)}
                                                    </select>
                                                </div>

                                            </div>

                                            
                                            <div className="input__row">
                                                
                                                <div className="label">
                                                    <label htmlFor="file-upload" className="label file-upload">Upload Your Photo</label>
                                                    <Drop onDrop={onDrop}/>
                                                </div>

                                            </div>
                                        {newError ? <p className="err-message">{newError}</p> : null}
                                        <p className="button-align"><button className="button mg-top" type="submit">Next</button></p>
                                        </form>
                                    );
                                }}
                            </Mutation>

                </div>

            </div>

        </div>

    );
};

export default PersonalInfo;