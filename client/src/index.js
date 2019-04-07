import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';

import NavBar from './components/NavBar'
import App from './components/App';

const Root = () => (
    <Router>
        <NavBar />
        <Switch>
            <Route path="/" exact component={App} />
            <Redirect to="/" />
        </Switch>
    </Router>
);


ReactDOM.render(<Root />, document.getElementById('root'));

