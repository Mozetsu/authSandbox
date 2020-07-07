const express = require('express');
const router = express.Router();
const { getUser } = require('../src/database');

router.post('/', (req, res) => {
	const data = req.body;
	const user = getUser(data);

	if (!user) return res.send({ server: 'Something went wrong.' });

	res.cookie('token', user.token, { maxAge: 86_400_000, httpOnly: true });
	res.cookie('username', user.username, { maxAge: 86_400_000, httpOnly: true });

	return res.redirect('/home');
});

module.exports = router;
