const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const routes = require('./routes/routes');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = process.env.PORT || 4000;

app.use('/', routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
