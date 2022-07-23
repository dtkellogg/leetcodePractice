nums = [3,6,2,3]

var largestPerimeter = function(A) {
    A.sort((a,b) => a - b)
    
    for(let i = A.length-1; i>1; i--) {
        if(A[i] < A[i-1] + A[i-2]) {
            return A[i] + A[i-1] + A[i-2]
        }
    }
    
    return 0
}

console.log(largestPerimeter(nums))