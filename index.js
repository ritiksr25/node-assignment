const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//configurations
require('dotenv').config();
require('./config/dbconnection');

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//load User model
const User = require('./models/User');
const Comment = require('./models/Comment');

//routes
app.use('/api/v1', require('./routes/api/v1/index'));
app.use('/api/v1/users', require('./routes/api/v1/users'));

app.get('/', (req, res) => res.status(200).json({ msg: 'Welcome to Homepage, please go to /api/v1/ for API.'}))
app.get('*', (req, res) => res.status(200).json({ msg: 'No such route!! please try again!!' }));

//Setting up Server
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if (err) throw err;
    else console.log(`Server is up and running on Port ${PORT}`);
})

