const database = [
	{ username: 'Moz', role: 'Admin', password: '111', token: 'R31798S21JOADSF1283918NF38' },
	{ username: 'Ainz', role: 'User', password: '222', token: '128R12D8NF31798SV3B3A32D83' },
	{ username: 'Ghown', role: 'User', password: '333', token: 'F3179B3A1V128RD8N3D2328S83' },
];

const getUser = (data) => {
	const user = database.find((user) => user.username === data.username);
	if (!user) return; // User not found
	if (data.password && user.password !== data.password) return; // Passwords do not match;
	return user;
};

module.exports = { database, getUser };
