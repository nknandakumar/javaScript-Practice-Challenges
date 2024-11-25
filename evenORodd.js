const EvenOdd = (n) => {
    console.log("EVEN AND ODD NUMBERS");
    
	for (let i = 0; i < n; i++) {
		if (i % 2 == 0) {
			console.log(`${i} is EVEN `);
		}else{
           console.log(`${i} is ODD`);
           
        }
	      
         
	}
};

EvenOdd(9);
