process.on('message', function (m) {
	console.log('CHILD got message:', m);
});
setInterval(() => {
	process.send(Date.now());
}, 1000);
