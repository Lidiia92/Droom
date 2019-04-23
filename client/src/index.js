import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';

import App from './components/App';
import Signup from './components/Auth/Signup';
import PersonalInfo from './components/PersonalInfo';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSearch, faHandshake, faEyeSlash, faEye, faCheck} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faSearch, faHandshake, faEyeSlash, faEye, faCheck)


const client = new ApolloClient({
    uri: 'http://localhost:3333/graphql'
});

const Root = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/personalinfo" render={(props) => <PersonalInfo {...props}/>} />
            <Redirect to="/" />
        </Switch>
    </Router>
);


ReactDOM.render(

    <ApolloProvider client={client}>
            <Root />
    </ApolloProvider>,

document.getElementById('root'));

