import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './styles/App.css';
import Banner from './Banner';
import NavBar from '../components/NavBar';
import Jumbotron from '../components/Jumbotron';
import './styles/Banner.css';

class App extends Component {
  render() {
    return (
        <div className="App">
			<NavBar />
			<div className="banner__content-sm">
				<div className="banner__text-sm">
					<div>
						<h1>Finding your job is our job.</h1>
					</div>
					<button className="cta">GET STARTED!</button>
            		<AnchorLink className="cta cta-green" href='#about'>HOW DOES IT WORK?</AnchorLink>
				</div>
			</div>
			<Banner />



			<Jumbotron />
        </div>
    );
  }
}

export default App;


