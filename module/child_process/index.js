/** 
const exec = require('child_process').exec;
console.log('child_process start');
exec('ls -l', function (error, stdout) {
	if (error) {
		console.log('Error code: ' + error);
		return;
	}
	console.log('Child Process STDOUT: ' + stdout);
});
console.log('main thread');

var child_process = require('child_process');

child_process.execFile('./index.sh', function (err, result) {
  console.log(result);
});

var child_process = require('child_process');
var path = '.';
var ls = child_process.spawn('/bin/ls', ['-l', path]);
ls.stdout.on('data', function (data) {
	console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
	console.log('stderr: ' + data);
});

ls.on('close', function (code) {
	console.log('child process exited with code ' + code);
});

*/
var child_process = require('child_process');
var n = child_process.fork('./child.js');
n.on('message', function (m) {
	console.log('PARENT got message:', m);
});
n.send({ hello: 'world' });
