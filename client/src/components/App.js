import React, { Component } from 'react';

import './styles/App.css';
import Banner from './Banner';
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavBar />
          <Banner />
        </div>
    );
  }
}

export default App;
