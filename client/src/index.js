import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';

import NavBar from './components/NavBar'
import App from './components/App';
import Signup from './components/Auth/Signup';

const Root = () => (
    <Router>
        <NavBar />
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/signup" render={() => <Signup />} />
            <Redirect to="/" />
        </Switch>
    </Router>
);


ReactDOM.render(<Root />, document.getElementById('root'));

