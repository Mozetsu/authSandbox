const express = require('express');
const router = express.Router();
const isAuthenticated = require('./middleware');

router.get('/', isAuthenticated, (req, res) => {
	const user = req.user;
	res.send({ loggedInAs: user.username, role: user.role });
});

module.exports = router;
