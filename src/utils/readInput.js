const {sep} = require("path");
const {readFileSync} = require("fs");
const getCallerFile = require("get-caller-file");

const readInput = ({input}) => {
	const file = getCallerFile()
		.split(sep)
		.slice(0, -1)
		.concat(input)
		.join(sep);
	
	return readFileSync(file).toString();
};

module.exports = readInput;
