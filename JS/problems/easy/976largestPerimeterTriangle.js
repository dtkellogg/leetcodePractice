nums = [2,1,2]
nums = [1, 4, 7, 9, 17]



// both of these work. they just follow different approaches

// var largestPerimeter = function(A) {
// 	A.sort((a, b) => b - a);    

// 	for(let i=0;i<A.length-2;i++) {
// 		let sum = A[i+1] + A[i+2];
// 		if (sum > A[i]) return sum + A[i];
// 	}
    
// 	return 0;  
// }

////////////////////////////////////////////////////////////////

var largestPerimeter = function(A) {
    A.sort((a,b) => a - b)
    
    for(let i = A.length-1; i>1; i--) {
        if(A[i] < A[i-1] + A[i-2]) {
            return A[i] + A[i-1] + A[i-2]
        }
    }
    
    return 0
}


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(largestPerimeter(nums))