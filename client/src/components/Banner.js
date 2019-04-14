import React, { Component } from 'react';
import image from '../images/603.jpg';
import NavBar from '../components/NavBar';

import './styles/Banner.css';


class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="banner__content">
           <div className="banner__text">
            <h1>GREAT CAREER AHEAD</h1>
            <h3>Looking for a dream job?</h3>
            <h3>You came to the right place</h3>
            <p>Thousands job opportunities are within one click</p>
           </div>
        </div>
      </div>
    );
  }
}

export default Banner;
