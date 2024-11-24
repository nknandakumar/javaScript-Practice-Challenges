//Factorial of numbers
const factorial = (num) => {
	if (num == 0) {
		return 1;
	}
	let fact = num * factorial(num - 1);
	return fact;
};

let number = 5;
console.log(` Factorial of ${number} is =  ${factorial(number)}`);

//Fibonacci Numbers

const fibonacci = (num) => {
	if (num === 0) {
		return 0;
	}
	if (num === 1) {
		return 1;
	}

	return fibonacci(num - 1) + fibonacci(num - 2);
};
const n = 15;
console.log(`Fibonacci numbers of ${n} are :-`);

for (let i = 0; i < n; i++) {
	console.log(`${fibonacci(i)}`);
}
