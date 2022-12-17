const readInput = require("../../src/utils/readInput.js");

const prepareInput = (rawInput) => rawInput;

const input = prepareInput(readInput({"input": "input.txt"}).split("\n"));
const sections = input.reduce((array, value) => {
	let ranges = value.split(",").map((section) => section.split("-")).map((range) => ({"first": parseInt(range[0], 10), "second": parseInt(range[1], 10)}));
	array.push(ranges)
	return array;
}, []);

let count = 0;

console.log("Sections:", sections);

sections.map((section) => {
	// if (
	// 	section[0].first <= section[1].first && section[0].second >= section[1].second ||
	// 	section[0].first >= section[1].first && section[0].second <= section[1].second ||
	// 	section[0].first <= section[1].first && section[0].second <= section[1].second ||
	// 	section[0].first >= section[1].first && section[0].second >= section[1].second
	// ) {
	if (!(section[0].first < section[1].first && section[0].second < section[1].first || section[0].first > section[1].second && section[0].second > section[1].second)) {
		count++;
	}
})

console.log("Count:", count);