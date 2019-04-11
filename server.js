const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({path: 'variables.env'});


//Bring in GraphQL/Express Middleware
// const { graphiqlExpress, graphqlExpress} = require('apollo-server-express');
// const { makeExecutableSchema } = require('graphql-tools');

// const {typeDefs} = require('./schema');
// const {resolvers} = require('./resolvers');

// //Create GraphQL schema
// const schema = makeExecutableSchema({
//     typeDefs: typeDefs,
//     resolvers: resolvers
// });

//Connect to database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

//Initializes application
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions), express.json());

//Set up jwt authentication middleware
// app.use( async (req, res, next) => {
//     const token = req.headers['authorization'];
//     if(token !== "null") {
//         try{
//             const currentUser = await jwt.verify(token, process.env.SECRET);
//             req.currentUser = currentUser;
//             console.log(req.currentUser);
//         } catch(err) {
//             console.error(err);
//         }
//     }
//     next();

// });

//create GraphiQL application
// app.use('/graphiql', graphiqlExpress({endpointURL: 'graphql'}));

// //Connect schemas with GraphQL
// app.use('/graphql', bodyParser.json(), 

// graphqlExpress((req) => ({
//     schema: schema,
//     context: {
//         Recipe,
//         User,
//         currentUser: req.currentUser
//     }
// }))

// );

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})