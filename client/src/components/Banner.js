import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/Banner.css';


class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="banner__content">
           <div className="banner__img"></div>
           <div className="banner__text">
                <div>
                    <h1>Finding your job is our job.</h1>
                </div>
            <button className="cta">GET STARTED!</button>
            <AnchorLink className="cta cta-green" href='#about'>HOW DOES IT WORK?</AnchorLink>
           </div>
        </div>
      </div>
    );
  }
}

export default Banner;
