console.log("*** Finding largest and Smallest numbers in Array ***");

const number = [100, 200, 300, 400, 500];

let largest = number[0];
let smallest = number[0];
for (let i = 0; i < number.length; i++) {
	if (number[i] > largest) {
		largest = number[i];
	}
	if (number[i] < smallest) {
		smallest = number[i];
	}
}

console.log("Largest Number is : ", largest);
console.log("Smallest Number is : ", smallest);

console.log("*** Addition of All Numbers of Array ***");

function SumNum(...num) {
	return num.reduce((acc, num) => acc + num, 0);
}

console.log(`Sum of Array is :-  ${SumNum(...number)} `);

console.log("*** Reversed Array ***");

let rev = [];
const reverseArray = () => {
	for (let i = number.length - 1; i >= 0; i--) {
		rev.push(number[i]);
	}
	console.log(`Array in correct order : ${number}`);
	console.log(`Array with in reverse order : ${rev}`);
};
reverseArray();

console.log("*** Remove Duplication of Array :- ");
const numbers = [1, 2, 3, 4, 5, 6, 6, 5, 9, 9];
const removeDuplicate = (args) => {
	return  numbers.filter((item, index) => numbers.indexOf(item) === index);
};
const UpdateNumbers = removeDuplicate(numbers);
console.log(`Array with Duplicate values :- ${numbers} `);
console.log(`Array with After removing Duplicate values :- ${UpdateNumbers} `);
