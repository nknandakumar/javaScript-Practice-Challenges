const word = "Malayalam";

const reversedWord = [];

const handleReverse = (...args) => {
	for (let i = args.length - 1; i >= 0; i--) {
		reversedWord.push(args[i]);
	}

	console.log(`String without Reverse :- ${word}`);

	console.log(`String with Reverse :- ${reversedWord.join("")}`);
};

handleReverse(...word);

//Improved Code
 
const reverse = (...args) => {
	let reversedWord = "";
	for (let i = args.length - 1; i >= 0; i--) {
		reversedWord += args[i]; //or  	reversedWord = reversedWord+= args[i];
	}
	return reversedWord;
};

const reversedString = reverse(...word);
console.log(`String without Reverse :- ${word}`);
console.log(`String with Reverse :- ${reversedString}`);
