const readInput = require("../../src/utils/readInput.js");

const prepareInput = (rawInput) => rawInput;

const input = prepareInput(readInput({"input": "input.txt"}).split("\n"));

let calorie = 0;

const calories = input.reduce((array, value) => {
	const isANumber = parseInt(value, 10);
	if (isANumber) {
		calorie += isANumber;
	} else {
		array.push(calorie);
		calorie = 0;
	}
	return array;
}, []);

console.log("Calculated calories:", calories);
console.log("Most largest value:", Math.max(...calories));

const topThree = calories.sort((a, b) => b - a).slice(0, 3);
console.log("Top three:", topThree);
console.log("Concatenation of the top three calorie:", topThree.reduce((a, b) => a + b, 0));

