const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const {typeDefs} = require ('./schema');
const {resolvers} = require ('./resolvers');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({path: 'variables.env'});

const User = require('./models/User');

//Initializes application
const app = express();
app.use(bodyParser.json());

const { makeExecutableSchema } = require('graphql-tools');

//Create GraphQL schema
const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    context: {
        User,
    },
    graphiql: true,
}));

//Connect to database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})