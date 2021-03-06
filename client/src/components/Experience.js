import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';
import './styles/PersonalInfo.css';

import states from './Data/states';

const Experience = (props) => {

    const [secondForm, setSecondForm] = useState(false);
    const [thirdForm, setThirdForm] = useState(false);

    const [startDateAsString1, setStartDateAsString1] = useState('');
    const [endDateAsString1, setEndDateAsString1] = useState('');

    const [startDateAsString2, setStartDateAsString2] = useState('');
    const [endDateAsString2, setEndDateAsString2] = useState('');

    const [startDateAsString3, setStartDateAsString3] = useState('');
    const [endDateAsString3, setEndDateAsString3] = useState('');
    
    const [newError1, setNewError1] = useState("");
    const [newError2, setNewError2] = useState("");
    const [newError3, setNewError3] = useState("");

    function startDateHandler1(data) {
        const dataString = JSON.stringify(data);
        setStartDateAsString1(dataString);
    }

    function endDateHandler1(data) {
        const dataString = JSON.stringify(data);
        setEndDateAsString1(dataString);
    }

    function startDateHandler2(data) {
        const dataString = JSON.stringify(data);
        setStartDateAsString2(dataString);
    }

    function endDateHandler2(data) {
        const dataString = JSON.stringify(data);
        setEndDateAsString2(dataString);
    }

    function startDateHandler3(data) {
        const dataString = JSON.stringify(data);
        setStartDateAsString3(dataString);
    }

    function endDateHandler3(data) {
        const dataString = JSON.stringify(data);
        setEndDateAsString3(dataString);
    }

    const [company1, setCompany1] = useState({
        companyName : '',
        jobTitle: '',
        city: '',
        state: 'Alabama',
        startDate: new Date(),
        endDate: new Date()

    });

    const [company2, setCompany2] = useState({
        companyName : '',
        jobTitle: '',
        city: '',
        state: 'Alabama',
        startDate: new Date(),
        endDate: new Date()
    });

    const [company3, setCompany3] = useState({
        companyName : '',
        jobTitle: '',
        city: '',
        state: 'Alabama',
        startDate: new Date(),
        endDate: new Date()
    });


    const errorStyle = {
        background: '#ffd1d1',
    };

    function showForms(e) {
        e.preventDefault();
        if (secondForm === false && thirdForm === false) {
            setSecondForm(true);
        }

        if(secondForm === true && thirdForm === false) {
            setThirdForm(true);
        }

        if(secondForm === false && thirdForm === true) {
            setSecondForm(true);
            setCompany2({
                companyName: company3.companyName,
                jobTitle: company3.jobTitle,
                city: company3.city,
                state: company3.state,
                startDate: company3.startDate,
                endDate: company3.endDate
            });
            setThirdForm(false);
            setCompany3({
                companyName: '',
                jobTitle: '',
                city: '',
                state: 'Alabama',
                startDate: new Date(),
                endDate: new Date()
            });
            setThirdForm(true);
        }
    }

    function removeSecondForm(e) {
        e.preventDefault();
        setSecondForm(false);
        setCompany2({
            companyName: '',
            jobTitle: '',
            city: '',
            state: 'Alabama',
            startDate: new Date(),
            endDate: new Date()
        })
    }

    function removeThirdForm(e) {
        e.preventDefault();
        setThirdForm(false);
        setCompany3({
            companyName: '',
            jobTitle: '',
            city: '',
            state: 'Alabama',
            startDate: new Date(),
            endDate: new Date()
        })
    }

   function submitFirstCompany(e, variables) {
       if(!variables.companyName || !variables.jobTitle || !variables.city || !variables.state || !variables.startDate || !variables.endDate) {
           const errMessage = "Please fill out all fields"
           setNewError1(errMessage);
           e.preventDefault();
           return;
        }
        e.preventDefault();
        setNewError1('');
        console.log('variables', variables);
   }

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
                    <form onSubmit={e => submitFirstCompany(e, {companyName: company1.companyName, jobTitle: company1.jobTitle, city: company1.city, state: company1.state, startDate: startDateAsString1, endDate: endDateAsString1})}>   

                        {newError1? <p className="err-message">{newError1}</p> : null}
                        <div className="input__row">
                            <input className="input-lg" placeholder="Company Name" value={company1.companyName} 
                            style={!company1.companyName && newError1 ? errorStyle : {}}
                            onChange={(e) => setCompany1({...company1, companyName: e.target.value})}/>
                        </div>

                        <div className="input__row">
                            <input className="input-lg" placeholder="Job Title" value={company1.jobTitle} 
                            style={!company1.jobTitle && newError1 ? errorStyle : {}}
                            onChange={(e) => setCompany1({...company1, jobTitle: e.target.value})}/>
                        </div>

                        <div className="input__row">
                            <input className="input-sm" placeholder="City" value={company1.city} 
                            style={!company1.city && newError1 ? errorStyle : {}}
                            onChange={(e) => setCompany1({...company1, city: e.target.value})}/>
                            <select className="input-sm" value={company1.state} 
                            style={!company1.state && newError1 ? errorStyle : {}}
                            onChange={e => setCompany1({...company1, state: e.target.value})}>
                                {states.map(state => <option key={state.abbreviation}>{state.name}</option>)}
                            </select>
                        </div>

                        <div className="input__row">
                           <div>
                                <div className="date-picker">
                                    <label htmlFor="date-picker1" className="label">Start Date</label>
                                    <DatePicker id="date-picker2" selected={company1.startDate}
                                    className={!startDateAsString1 && newError1 ? `errorStyle` : ''}
                                    onChange={e => {setCompany1({...company1, startDate: e});
                                    startDateHandler1(company1.startDate);
                                    }}/>
                                </div>

                                <div className="date-picker">
                                    <label htmlFor="date-picker2" className="label">End Date</label>
                                    <DatePicker id="date-picker2" selected={company1.endDate} 
                                    style={!endDateAsString1 && newError1 ? errorStyle : {}}
                                    onChange={e => {setCompany1({...company1, endDate: e});
                                    endDateHandler1(company1.endDate);
                                    }}/>
                                </div>
                           </div>

                        </div>

                        <button className="button" type="submit"  >Save</button>
                    </form>

                    {secondForm ? 
                        <form>          
                            <div className="input__row">
                                <input className="input-lg" placeholder="Company Name" value={company2.companyName} onChange={(e) => setCompany2({...company2, companyName: e.target.value})}/>
                            </div>

                            <div className="input__row">
                                <input className="input-lg" placeholder="Job Title" value={company2.jobTitle} onChange={(e) => setCompany2({...company2, jobTitle: e.target.value})}/>
                            </div>

                            <div className="input__row">
                                <input className="input-sm" placeholder="City" value={company2.city} onChange={(e) => setCompany2({...company2, city: e.target.value})}/>
                                <select className="input-sm" value={company2.state} onChange={e => setCompany2({...company2, state: e.target.value})}>
                                    {states.map(state => <option key={state.abbreviation}>{state.name}</option>)}
                                </select>
                            </div>

                            <div className="input__row">
                                <div>
                                    <div className="date-picker">
                                        <label htmlFor="date-picker3" className="label">Start Date</label>
                                        <DatePicker id="date-picker3" selected={company2.startDate} 
                                        onChange={e => {setCompany2({...company2, startDate: e});
                                        startDateHandler2(company2.startDate);
                                        }}/>
                                    </div>

                                    <div className="date-picker">
                                        <label htmlFor="date-picker4" className="label">End Date</label>
                                        <DatePicker id="date-picker4" selected={company2.endDate} 
                                        onChange={e => {setCompany2({...company2, endDate: e});
                                        endDateHandler2(company2.endDate);
                                        }}/>
                                    </div>
                                </div>

                            </div>
                            <button className="button" type="submit"  >Save</button>
                            <button onClick={e => removeSecondForm(e)} className="button btn-red" >Cancel</button> 
                     </form>

                     : null}

                    {thirdForm ? 
                        <form>          
                            <div className="input__row">
                                <input className="input-lg" placeholder="Company Name" value={company3.companyName} onChange={(e) => setCompany3({...company3, companyName: e.target.value})}/>
                            </div>

                            <div className="input__row">
                                <input className="input-lg" placeholder="Job Title" value={company3.jobTitle} onChange={(e) => setCompany3({...company3, jobTitle: e.target.value})}/>
                            </div>

                            <div className="input__row">
                                <input className="input-sm" placeholder="City" value={company3.city} onChange={(e) => setCompany3({...company3, city: e.target.value})}/>
                                <select className="input-sm" value={company3.state} onChange={e => setCompany3({...company3, state: e.target.value})}>
                                    {states.map(state => <option key={state.abbreviation}>{state.name}</option>)}
                                </select>
                            </div>

                            <div className="input__row">
                                <div>
                                    <div className="date-picker">
                                        <label htmlFor="date-picker5" className="label">Start Date</label>
                                        <DatePicker id="date-picker5" selected={company3.startDate} 
                                        onChange={e => {setCompany3({...company3, startDate: e});
                                        startDateHandler3(company3.startDate);
                                        }}/>
                                    </div>

                                    <div className="date-picker">
                                        <label htmlFor="date-picker6" className="label">End Date</label>
                                        <DatePicker id="date-picker6" selected={company3.endDate} 
                                        onChange={e => {setCompany3({...company3, endDate: e});
                                        endDateHandler3(company3.endDate);
                                        }}/>
                                    </div>
                                </div>

                            </div>

                            <button className="button" type="submit"  >Save</button>
                            <button onClick={e => removeThirdForm(e)} className="button btn-red" >Cancel</button> 
                     </form>

                     : null}

                    <div className="input__row">
                            {secondForm && thirdForm ? null : <p className="add-more" onClick={(e) => showForms(e)}>+ Add New Experience</p>}
                    </div> 

                    <div className="align-right"> 
                            <button className="button" type="submit">Next</button>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Experience;



