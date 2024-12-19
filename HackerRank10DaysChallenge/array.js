
//find the second largest number in the array
function getSecondLargest(nums) {    
    let removeDuplicate = Array.from(new Set(nums));
    console.log(removeDuplicate);
    
    let sort = removeDuplicate.sort((a,b) => b-a) ;
    let result = sort[1] ;
    return result
  }
  
  console.log(getSecondLargest([5,4,4,3,2,1]));