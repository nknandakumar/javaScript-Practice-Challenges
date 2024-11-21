
console.log("---------------");

function fizzBuzz(n) {
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


fizzBuzz(26);

//Hacker Rank FizzBuzz Challenge solution
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0 && i % 5 != 0) {
            console.log("Fizz");
        } else if (i % 3 != 0  && i % 5 == 0 ) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function main() {
    const n = parseInt(readLine().trim(),15);
     fizzBuzz(n);   
}