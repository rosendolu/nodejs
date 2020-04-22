var cluster = require('cluster');

if (cluster.isMaster) {
	var numWorkers = require('os').cpus().length;
	console.log('Master cluster setting up ' + numWorkers + ' workers...');
	const workers = Array.from({ length: numWorkers }, () => cluster.fork());
	workers.map((item, index) => {
		console.log(`workers ${index}`, item.id);
	});
	cluster.on('online', function (worker) {
		console.log('Worker ' + worker.process.pid + ' is online');
	});
	cluster.on('listening', (worker, address) => {
		console.log(
			`A worker is now connected to ${address.address}:${address.port}`
		);
	});
	cluster.on('exit', function (worker, code, signal) {
		console.log(
			'Worker ' +
				worker.process.pid +
				' died with code: ' +
				code +
				', and signal: ' +
				signal
		);
		console.log('Starting a new worker');
		// cluster.fork();
	});
}
