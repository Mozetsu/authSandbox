const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const loginRoute = require('./routes/login');
const dashboardRoute = require('./routes/dashboard');
const homeRoute = require('./routes/home');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {});
app.use('/login', loginRoute);
app.use('/home', homeRoute);
app.use('/dashboard', dashboardRoute);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
