const express = require('express');
const router = express.Router();
const isAuthenticated = require('./middleware');
const { database } = require('../src/database');

router.get('/', isAuthenticated, (req, res) => {
	const user = req.user;
	if (user.role !== 'Admin') return res.send({ server: 'Login as an Admin.' });

	const parsedDatabase = [];
	database.forEach((user) => {
		parsedDatabase.push({ username: user.username, role: user.role });
	});
	res.send(parsedDatabase);
});

module.exports = router;
