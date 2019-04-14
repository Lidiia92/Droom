import React, { Component } from 'react';

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
			<Banner />

			<div className="banner__content-sm">
				<div className="banner__text-sm">
					<h1>GREAT CAREER AHEAD</h1>
					<h3>Looking for a dream job?</h3>
					<h3>You came to the right place</h3>
					<p>Thousands job opportunities are within one click</p>
				</div>
			</div>

			<Jumbotron />
		  
        </div>
    );
  }
}

export default App;
