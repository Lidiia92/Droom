import React, { useState } from 'react';


import {Link} from 'react-router-dom';
import './styles/PersonalInfo.css';




const Experience = (props) => {

    const [counter, setCounter] = useState(0)
    const [educationArray, setEducationArray] = useState([0]);

    const [schoolName0, setName0] = useState("");
    const [schoolName1, setName1] = useState("");
    const [schoolName2, setName2] = useState("");

    
    const [degree0, setDegree0] = useState("");
    const [degree1, setDegree1] = useState("");
    const [degree2, setDegree2] = useState("");

    const [field0, setField0] = useState("");
    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");

   


    function addEducation(newCounter) {

        setCounter(newCounter + 1);
        console.log('counter', counter);
        if(educationArray.length < 3) {
            setEducationArray([...educationArray, newCounter + 1]);
        } else if(educationArray.length === 3) {

            if(educationArray[1] === null) {
                educationArray[1] = educationArray[2];
                setEducationArray([educationArray[0], educationArray[1], newCounter + 1]);
                schoolNamesFunctions[1](schoolName2);
                schoolNamesFunctions[2]("");
                degreesFunctions[1](degree2);
                degreesFunctions[2]("");
                fieldsFunctions[1](field2);
                fieldsFunctions[2]("");
            } else if(educationArray[2] === null) {
                educationArray[2] = newCounter + 1;
                setEducationArray([educationArray[0], educationArray[1], educationArray[2]]);
            } 


        }
        console.log(educationArray);
    }

    function removeEducation(e, educationVal, index) {
        e.preventDefault();
        console.log('value', educationVal);
        //schoolNamesFunctions[index]("");
        //setEducationArray(educationArray.filter((item) => item !== educationVal));

        setEducationArray(educationArray.map(item => {
            if(item === educationVal) {
                item = null;
                schoolNamesFunctions[index]("");
                degreesFunctions[index]("");
                fieldsFunctions[index]("");
            }
            return item;
        }));
        console.log('test3', educationArray);
        
    }


    
    
    const schoolNames =  [schoolName0, schoolName1, schoolName2];
    const schoolNamesFunctions = [setName0, setName1, setName2];

    const degrees = [degree0, degree1, degree2];
    const degreesFunctions = [setDegree0, setDegree1, setDegree2];

    const fields = [field0, field1, field2];
    const fieldsFunctions = [setField0, setField1, setDegree2];
    
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

                        if(education !== null) {
                            return (
                                <form key={education !== null ? education : Math.random()} className={index !== 0 ? `slide-fade slide-fade-show` : ''}>
                                    <div className="input__row">
                                        <input className="input-sm" placeholder="School Name" name={`schoolName${index}`} onChange={(e) => schoolNamesFunctions[index](e.target.value)} value={`${schoolNames[index]}`}/>
                                        <input className="input-sm" placeholder="Degree" onChange={(e) => degreesFunctions[index](e.target.value)} value={`${degrees[index]}`}/>
                                    </div>
    
                                    <div className="input__row">
                                        <input className="input-lg" placeholder="Field of Study" onChange={(e) => fieldsFunctions[index](e.target.value)} value={`${fields[index]}`}/>
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
                                    {index !== 0 ? <button className="button btn-red" onClick={(e) => removeEducation(e, education, index)}>Cancel</button> : null}  
    
                                </form>
                            );

                        }
                        
                    })}
                

                    <div className="input__row">
                        {((educationArray.length === 3 && !educationArray.includes(null)) || (educationArray.length > 3 && educationArray.includes(null))) ? null : <p className="add-more" onClick={ () => addEducation(counter)}>+ Add New Education</p>}
                    </div>  

                </div>

            </div>

        </div>

    );
};

export default Experience;