//Rest operator and reducer function
const listSum = [1, 2, 3, 4, 5];

function sum(...args) {
	return args.reduce((a, b) => a + b);
}
console.log(sum(...listSum));


console.log("----------------------------------------");

//Flexible functional arguments.

function reduceFunc(...args) {
	return args.reduce((acc, num) => acc + num,0);
}

console.log(reduceFunc());
console.log(reduceFunc(90, 90, 90));

console.log("----------------------------------------");
//Handling variable length Arguments

const findMax =(...num)=>{
   return Math.max(...num);
}

const findMin =(...num)=>{
   return Math.min(...num);
}

console.log(findMax(56,89,56,47,99));
console.log(findMin(56,89,56,47,99));

console.log("----------------------------------------");
//Extracting Specific Arguments and Collecting the Rest

function greet(greeting, ...names) {
    console.log(`${greeting} = ${names.join("  Mr.")}!`);
  }
  
  greet("Well Come to Js World ","Mark", "Alice", "Bob", "Charlie"); // Output: Hello, Alice, Bob, Charlie!

