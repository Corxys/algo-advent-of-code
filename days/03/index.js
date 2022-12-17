const readInput = require("../../src/utils/readInput.js");

const prepareInput = (rawInput) => rawInput;

const input = prepareInput(readInput({"input": "input.txt"}).split("\n"));

const priorities = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const compartments = input.reduce((array, value, index) => {
	// const items = {
	// 	"first": value.slice(0, value.length / 2),
	// 	"second": value.slice(value.length / 2, value.length),
	// };
	// array.push(items);
	
	const chunkIndex = Math.floor(index / 3);
	if (!array[chunkIndex]) {
		array[chunkIndex] = [];
	}
	array[chunkIndex].push(value);
	
	return array;
}, []);

console.log("Compartments:", compartments);
// console.log("Items priority:", compartments.map((compartment) => priorities.indexOf(compartment.first.split("").find(a => compartment.second.includes(a))) + 1).reduce((a, b) => a + b, 0));
console.log("Items priority:", compartments.map((compartment) => priorities.indexOf(compartment[0].split("").find((a) => compartment[1].includes(a) && compartment[2].includes(a) ? a : null)) + 1).reduce((a, b) => a + b, 0));