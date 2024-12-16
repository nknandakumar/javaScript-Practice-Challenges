
//NOTE :- There 2 methods to solve the Factorial of number. 1st is Iteration and 2nd is Recursion
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
//Using Iteration
function factorial(n){
    if(n<=0){
        return ` NOT DEFINED FOR THE NEGATIVE NUMBERS`
    }
    
    var result = 1
    
    for( let i=1 ; i<=n ;i++){
        result = result*i ;
    }
  
    return result ;
}

//Using Recursion
function factorial(n){
    if(n<0){
        return ` NOT DEFINED FOR THE NEGATIVE NUMBERS`
    }
    if(n==0 || n==1){
        return 1 ;
    }
    
    let result = n*factorial(n-1);
  
    return result ;
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}



