const express = require('express')
const users = require('./MOCK_DATA.json');
const userRoutes = require('./routes/user')
const {connectMongoDb} = require('./connection')
const {logReqRes} = require('./middlewares/index')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

//! middleware to parse JSON bodies
app.use(bodyParser.json())

//! Routes
app.use('/api/users', userRoutes)


//! connect to mongodb...

connectMongoDb(process.env.MONGODB_URL)
.then(()=>{
    console.log("connected to mongodb...");
})
.catch((err)=>{
    console.log("error connecting to server", err);
})


//! middleware -----> plugin -------> function
app.use(express.urlencoded({ extended: false }));

//! middleware to use the info about the clients
app.use(logReqRes('log.txt'))

app.listen(8000, ()=>{
    console.log("server is running");
})