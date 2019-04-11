import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import './styles/App.css';
import Jumbotron from './Jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
      </div>
    );
  }
}

export default App;
