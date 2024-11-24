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


console.log("----------------------------- Palindrome -------------------------------");


const palindromeWord = "levele";

const handlePalindrome =(str)=>{
	let left = 0 ;
	let right = str.length-1 ;

	while (left < right) {
		  if(str[left] !== str[right]){
			 return false ;
		  }
		  left++ ;
		  right--;
	}
	return true
}

console.log( handlePalindrome(palindromeWord));

