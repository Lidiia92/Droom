import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import {Link} from 'react-router-dom';
import './styles/PersonalInfo.css';

import states from '../components/Data/states';

const Experience2 = (props) => {

    const [secondForm, setSecondForm] = useState(false);
    const [thirdForm, setThirdForm] = useState(false);
    const [dateAsString, setDateAsString] = useState("");
    
    const [newError1, setNewError1] = useState("");
    const [newError2, setNewError2] = useState("");
    const [newError3, setNewError3] = useState("");

    function dataString(data) {
        const dataString = JSON.stringify(data);
        setDateAsString(dataString);
        console.log(dataString);
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

    console.log('company1', company1, 'company3', company3, 'string date', dateAsString)

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
                            <input className="input-lg" placeholder="Company Name" value={company1.companyName} onChange={(e) => setCompany1({...company1, companyName: e.target.value})}/>
                        </div>

                        <div className="input__row">
                            <input className="input-lg" placeholder="Job Title" value={company1.jobTitle} onChange={(e) => setCompany1({...company1, jobTitle: e.target.value})}/>
                        </div>

                        <div className="input__row">
                            <input className="input-sm" placeholder="City" value={company1.city} onChange={(e) => setCompany1({...company1, city: e.target.value})}/>
                            <select className="input-sm" value={company1.state} onChange={e => setCompany1({...company1, state: e.target.value})}>
                                {states.map(state => <option key={state.abbreviation}>{state.name}</option>)}
                            </select>
                        </div>

                        <div className="input__row">
                           <div>
                                <div className="date-picker">
                                    <label htmlFor="date-picker1" className="label">Start Date</label>
                                    <DatePicker id="date-picker2" selected={company1.startDate} 
                                    onChange={e => {setCompany1({...company1, startDate: e});
                                    dataString(company1.startDate);
                                    }}/>
                                </div>

                                <div className="date-picker">
                                    <label htmlFor="date-picker2" className="label">End Date</label>
                                    <DatePicker id="date-picker2" selected={company1.endDate} 
                                    onChange={e => {setCompany1({...company1, endDate: e});
                                    dataString(company1.endDate);
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
                                        dataString(company2.startDate);
                                        }}/>
                                    </div>

                                    <div className="date-picker">
                                        <label htmlFor="date-picker4" className="label">End Date</label>
                                        <DatePicker id="date-picker4" selected={company2.endDate} 
                                        onChange={e => {setCompany2({...company2, endDate: e});
                                        dataString(company2.endDate);
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
                                        dataString(company3.startDate);
                                        }}/>
                                    </div>

                                    <div className="date-picker">
                                        <label htmlFor="date-picker6" className="label">End Date</label>
                                        <DatePicker id="date-picker6" selected={company3.endDate} 
                                        onChange={e => {setCompany3({...company3, endDate: e});
                                        dataString(company3.endDate);
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

export default Experience2;



