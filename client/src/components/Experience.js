import React, { useState } from 'react';
import {UPDATE_USER_EDUCATION_0} from '../queries/index';
import {UPDATE_USER_EDUCATION_1} from '../queries/index';
import {UPDATE_USER_EDUCATION_2} from '../queries/index';
import {Mutation} from 'react-apollo';
import {withRouter} from 'react-router-dom';

import {Link} from 'react-router-dom';
import './styles/PersonalInfo.css';
import { removeDirectivesFromDocument } from 'apollo-utilities';




const Experience = (props) => {

    const [newError0, setNewError0] = useState("");
    const [newError1, setNewError1] = useState("");
    const [newError2, setNewError2] = useState("");

    const [counter, setCounter] = useState(0)
    const [educationArray, setEducationArray] = useState([0]);
    const [educationFormButton0, setEducationFormButton0] = useState(false);
    const [educationFormButton1, setEducationFormButton1] = useState(true);
    const [educationFormButton2, setEducationFormButton2] = useState(true);

    const [schoolName0, setName0] = useState("");
    const [schoolName1, setName1] = useState("");
    const [schoolName2, setName2] = useState("");

    
    const [degree0, setDegree0] = useState("");
    const [degree1, setDegree1] = useState("");
    const [degree2, setDegree2] = useState("");

    const [field0, setField0] = useState("");
    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");

    const [from0, setFrom0] = useState("");
    const [from1, setFrom1] = useState("");
    const [from2, setFrom2] = useState("");

    const [to0, setTo0] = useState("");
    const [to1, setTo1] = useState("");
    const [to2, setTo2] = useState("");

    const [disabledSecond, setDisabledSecond] = useState(false);
    const [disabledThird, setDisabledThird] = useState(false);
   


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
                fromsFunctions[1](from2);
                fromsFunctions[2]("");
                tosFunctions[1](to2);
                tosFunctions[2]("");

                if(saveButtons[0] === true && saveButtons[1] === false) {
                    saveButtonsFunctions[2](true);
                }
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
                fromsFunctions[index]("");
                tosFunctions[index]("");

                if(index !== 2 && saveButtons[0] !== false) {
                    saveButtonsFunctions[index+1](false);
                }
                
            }
            return item;
        }));
        console.log('test3', educationArray);
        
    }

    async function submitHandler(e, updateUserEducation, variables, index) {

      if(!variables.schoolName, !variables.degree, !variables.field, !variables.from, !variables.to) {
            const errMessage = "Please fill out all fields"
            errorFunctions[index](errMessage);
            e.preventDefault();
            return;
       }

       e.preventDefault();
       if (validateText(variables.schoolName, variables.degree, variables.field)) {
            
            console.log('test');
            if(index === 1) {
                setDisabledSecond(true);
            } else if (index === 2) {
                setDisabledThird(true);
            }
            const updated = await updateUserEducation();
       }

    }

    function validateText(schoolName, degree, field) {
        if(schoolName && degree && field) {
            return true;
        } else {
            return false;
        }
    }

    function redirectToNextPage(e) {
        e.preventDefault();
        props.history.push('/experience2');
    }


    
    
    const schoolNames =  [schoolName0, schoolName1, schoolName2];
    const schoolNamesFunctions = [setName0, setName1, setName2];

    const degrees = [degree0, degree1, degree2];
    const degreesFunctions = [setDegree0, setDegree1, setDegree2];

    const fields = [field0, field1, field2];
    const fieldsFunctions = [setField0, setField1, setField2];

    const froms = [from0, from1, from2];
    const fromsFunctions = [setFrom0, setFrom1, setFrom2];

    const tos = [to0, to1, to2];
    const tosFunctions = [setTo0, setTo1, setTo2];

    const saveButtons = [educationFormButton0, educationFormButton1, educationFormButton2];
    const saveButtonsFunctions = [setEducationFormButton0, setEducationFormButton1, setEducationFormButton2];

    const errors = [newError0, newError1, newError2];
    const errorFunctions = [setNewError0, setNewError1, setNewError2];

    const mutationsFunctions = [UPDATE_USER_EDUCATION_0, UPDATE_USER_EDUCATION_1, UPDATE_USER_EDUCATION_2]
    
    console.log('test2', counter, educationArray);

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

                <h3 className="sections left-heading">Educational Background</h3>

                <div className="form__wrapper">

                    {educationArray.map((education, index) => {

                        if(education !== null) {
                            return (
                                <Mutation mutation={mutationsFunctions[index]} key={education !== null ? education : Math.random()} variables={{_id: localStorage.getItem('uid'), schoolName: `${schoolNames[index]}`, degree: `${degrees[index]}`, field: `${fields[index]}`, from: `${froms[index]}`, to: `${tos[index]}`}}>
                                    {(updateUserEducation, {data, loading, error}) => {

                                        return (
                                            <form  onSubmit={(e) => {
                                                submitHandler(e, updateUserEducation, {schoolName: `${schoolNames[index]}`, degree: `${degrees[index]}`, field: `${fields[index]}`, from: `${froms[index]}`, to: `${tos[index]}`}, index)
                                                if (validateText(`${schoolNames[index]}`, `${degrees[index]}`, `${fields[index]}`)){
                                                    saveButtonsFunctions[index](!saveButtons[index]);
                                                    if(index !== 2) {
                                                        saveButtonsFunctions[index+1](false)
                                                    }
                                                } 

                                                }} >

                                                {errors[index] ? <p className="err-message">{errors[index]}</p> : null}

                                                <div className="input__row">
                                                    <input className="input-sm" placeholder="School Name" name={`schoolName${index}`} onChange={(e) => schoolNamesFunctions[index](e.target.value)} value={`${schoolNames[index]}`} pattern="[A-Z][A-Za-z0-9.' ]+" title="School Name(A-Za-z0-9.' )"
                                                    style={errors[index] ? errorStyle : {}}
                                                    />
                                                    <input className="input-sm" placeholder="Degree" onChange={(e) => degreesFunctions[index](e.target.value)} value={`${degrees[index]}`}
                                                    style={errors[index] ? errorStyle : {}}
                                                    pattern="[A-Z][A-Za-z' ]+" title="Degree(A-Za-z' )"
                                                    />
                                                </div>
                
                                                <div className="input__row">
                                                    <input className="input-lg" placeholder="Field of Study" onChange={(e) => fieldsFunctions[index](e.target.value)} value={`${fields[index]}`}
                                                    style={errors[index] ? errorStyle : {}}
                                                    pattern="[A-Z][A-Za-z ]+" title="Field of Study(A-Za-z )"
                                                    />
                                                </div>
                
                                                <div className="input__row">
                                                        <div className="labeled__input">
                                                            <label htmlFor="startDate" className="label">From Year</label>                 
                                                            <input id="startDate"  placeholder="Year" onChange={(e) => fromsFunctions[index](e.target.value)} value={`${froms[index]}`}
                                                            style={errors[index] ? errorStyle : {}}
                                                            pattern="[0-9]{4}" title="Start Date(0-9)"
                                                            />  
                                                        </div>
                                                        <div className="labeled__input">
                                                            <label htmlFor="startDate" className="label">To Year</label>
                                                            <input id="startDate"  placeholder="Year" onChange={(e) => tosFunctions[index](e.target.value)} value={`${tos[index]}`}
                                                            style={errors[index] ? errorStyle : {}}
                                                            pattern="[0-9]{4}" title="Start Date(0-9)"
                                                            />                   
                                                        </div>
                                                </div> 
                
                                                <button className="button" type="submit" disabled={saveButtons[index]} >Save</button>
                                                {index !== 0 ? <button className="button btn-red"  disabled={disabledSecond && index === 1 || disabledThird && index ===2 ? true : false} onClick={(e) => removeEducation(e, education, index)}>Cancel</button> : null}  
                
                                            </form>
                                        );

                                    }}
                                </Mutation>
                            );
                        }
                        
                    })}
                

                    <div className="input__row">
                        {((educationArray.length === 3 && !educationArray.includes(null)) || (educationArray.length > 3 && educationArray.includes(null))) ? null : <p className="add-more" onClick={ () => addEducation(counter)}>+ Add New Education</p>}
                    </div> 
                        
                    <div className="align-right"> 
                        <button onClick={(e) => redirectToNextPage(e)}className="button" type="submit" disabled={saveButtons[0] === true ? false : true} >Next</button>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default withRouter(Experience);