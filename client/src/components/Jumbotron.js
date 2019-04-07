import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/Jumbotron.css';

const Jumbotron = () => (
    <div className="jumbotron__wrapper">
        <h1 className="jumbotron__header">Welcome, to Droom</h1>
        <p className="jumbotron__subheader">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta consectetur nisl. Sed at vehicula justo.</p>
        <p className="cta"><Link className="cta__button">Get Started!</Link></p>
        <div className="cards">
            <div className="cards__wrapper">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
    </div>
);

export default Jumbotron;