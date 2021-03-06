const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const {apolloUploadExpress} = require('apollo-upload-server');
const {typeDefs} = require ('./schema');
const {resolvers} = require ('./resolvers');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({path: 'variables.env'});


const User = require('./models/User');

//Initializes application

const url = process.env.NODE_ENV === "production" ? 'https://react-apollo-droom.herokuapp.com/' : 'http://localhost:3000'

const corsOptions = {
    origin: 'http://localhost:3000'
}

const app = express();
app.use(cors());

const { makeExecutableSchema } = require('graphql-tools');

//Create GraphQL schema
const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});


app.use('/graphql', bodyParser.json(), graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    context: {
        User,
    },
    graphiql: false,
}));

//Connect to database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    //app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        
    });
}

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})