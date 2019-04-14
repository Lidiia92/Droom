import React, { Component } from 'react';
import image from '../images/603.jpg';
import NavBar from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/Banner.css';


class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="banner__content">
           <div className="banner__text">
            <h1>GREAT CAREER AHEAD</h1>
            <h3>Looking for a dream job? You came to the right place.</h3>
            <p>Thousands job opportunities are within one click! <FontAwesomeIcon  className="hand-icon" icon="hand-point-up"/></p>
            <button className="cta">GET STARTED!</button>
            <button className="cta cta-green">How does it work?</button>
           </div>
        </div>
      </div>
    );
  }
}

export default Banner;
