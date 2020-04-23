const dns = require('dns');
dns.lookup('www.github.com', 4, (err, address) => {
	if (err) return;
	console.log('host', address);
});
