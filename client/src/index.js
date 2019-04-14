import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';

import NavBar from './components/NavBar'
import App from './components/App';
import Signup from './components/Auth/Signup';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSearch, faHandshake, faEyeSlash, faEye, faHandPointUp} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faSearch, faHandshake, faEyeSlash, faEye, faHandPointUp)

const Root = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/signup" render={() => <Signup />} />
            <Redirect to="/" />
        </Switch>
    </Router>
);


ReactDOM.render(<Root />, document.getElementById('root'));

