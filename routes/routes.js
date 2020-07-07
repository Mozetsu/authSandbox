const express = require('express');
const router = express.Router();
const isAuthenticated = require('./middleware');
const { database, getUser } = require('../src/database');

router.post('/login', (req, res) => {
	const data = req.body;
	const user = getUser(data);

	if (!user) return res.send({ server: 'Something went wrong.' });

	res.cookie('token', user.token, { maxAge: 86_400_000, httpOnly: true });
	res.cookie('username', user.username, { maxAge: 86_400_000, httpOnly: true });

	return res.redirect('/home');
});

router.get('/home', isAuthenticated, (req, res) => {
	const user = req.user;
	res.send({ loggedInAs: user.username, role: user.role });
});

router.get('/dashboard', isAuthenticated, (req, res) => {
	const user = req.user;
	if (user.role !== 'Admin') return res.send({ server: 'Not allowed.' });

	const parsedDatabase = [];
	database.forEach((user) => {
		parsedDatabase.push({ username: user.username, role: user.role });
	});
	res.send(parsedDatabase);
});

module.exports = router;
