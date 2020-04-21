const glob = require('glob');
const { resolve } = require('path');
const jsArr = glob.sync(resolve(__dirname, './', '**/*.js'));
console.log(jsArr);
jsArr
	.filter((item) => item.indexOf('app.js') === -1)
	.map((item) => {
		require(`${item}`).run();
	});
