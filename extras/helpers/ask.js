const readline = require("readline");

const readlineInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const ask = (questionText) => {
	return new Promise((resolve, reject) => {
		readlineInterface.question(questionText, (input) => resolve(input));
	});
};

module.exports = ask;
