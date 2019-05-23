import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient} from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './index.css';

import App from './components/App';
import Signup from './components/Auth/Signup';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSearch, faHandshake, faEyeSlash, faEye, faCheck, faImage, faCheckSquare} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faSearch, faHandshake, faEyeSlash, faEye, faCheck, faImage, faCheckSquare)


const client = new ApolloClient({
    link: createHttpLink({ uri: 'http://localhost:3333/graphql' }),
    //link: createHttpLink({ uri: 'https://react-apollo-droom.herokuapp.com/graphql' }),
    cache: new InMemoryCache()
});

const Root = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/personalinfo" render={(props) => <PersonalInfo {...props}/>} />
            <Route path="/experience" render={(props) => <Experience {...props}/>} />
            <Redirect to="/" />
        </Switch>
    </Router>
);


ReactDOM.render(

    <ApolloProvider client={client}>
            <Root />
    </ApolloProvider>,

document.getElementById('root'));

