

//Function to multiply two numbers represented as a String 

const MultFunc =(num1,num2)=>{
    let result = parseInt(num1*num2) ;
    return result.toString() ;
}

console.log(MultFunc(2,2));


//Function to generate nth Woodel  number

function woodelNumber(n) {
    const result = n*2**n-1
    return result ;
}

console.log(woodelNumber(3));
