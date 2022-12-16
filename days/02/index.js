const readInput = require("../../src/utils/readInput.js");

const prepareInput = (rawInput) => rawInput;

const input = prepareInput(readInput({"input": "input.txt"})).split("\n");

const signs = [
	{"name": "Rock", "keys": ["A", "X"], "point": 1, "wonAgainst": "Scissors"},
	{"name": "Paper", "keys": ["B", "Y"], "point": 2, "wonAgainst": "Rock"},
	{"name": "Scissors", "keys": ["C", "Z"], "point": 3, "wonAgainst": "Paper"},
];
const DRAW = 3;
const WON = 6;

let scores = {"firstPlayerScore": 0, "secondPlayerScore": 0};

input.forEach((round) => {
	const roundSplit = round.split(" ");
	
	const firstPlayerHit = signs.find((sign) => sign.keys[0] === roundSplit[0]);
	const secondPlayerHit = signs.find((sign) => sign.keys[1] === roundSplit[1]);
	
	let first = firstPlayerHit.point, second = secondPlayerHit.point;
	
	// Part one
	// if (firstPlayerHit.name === secondPlayerHit.name) {
	// 	first += DRAW;
	// 	second += DRAW;
	// } else if (firstPlayerHit.name === secondPlayerHit.wonAgainst) {
	// 	second += WON;
	// } else {
	// 	first += WON;
	// }
	
	// Part two
	switch(secondPlayerHit.keys[1]) {
		case "X":
			first += WON;
			second = signs.find((a) => a.name === signs.find((b) => b.name === firstPlayerHit.name).wonAgainst).point;
			break;
		case "Y":
			first += DRAW;
			second = first;
			break;
		case "Z":
			second = signs.find((a) => a.wonAgainst === firstPlayerHit.name).point + WON;
			break;
	}
	
	scores = {"firstPlayerScore": scores.firstPlayerScore + first, "secondPlayerScore": scores.secondPlayerScore + second};
});

console.log("Scores:", scores);
console.log("Score second player:", scores.secondPlayerScore);


