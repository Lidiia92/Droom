import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/Jumbotron.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faSearch)

const Jumbotron = () => (
    <div className="jumbotron__wrapper">
        <h1 className="jumbotron__header">Welcome, to Droom</h1>
        <p className="jumbotron__subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta consectetur nisl. Sed at vehicula justo.</p>
        <p className="cta"><Link className="cta__button">Get Started!</Link></p>
        <div className="cards">
            <div className="cards__wrapper">
                <div className="card"><FontAwesomeIcon className="card-svg" icon="user"/></div>
                <div className="card"><FontAwesomeIcon className="card-svg" icon="search"/></div>
                <div className="card"></div>
            </div>
        </div>
    </div>
);

export default Jumbotron;