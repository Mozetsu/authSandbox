const { database, getUser } = require('../src/database');

const isAuthenticated = (req, res, next) => {
	const cookies = req.cookies;
	if (!cookies) return res.redirect('/');
	const user = getUser(cookies);
	if (!user || user.token !== cookies.token) return res.send({ server: 'You must authenticate.' });
	req.user = user;
	next();
};

module.exports = isAuthenticated;
