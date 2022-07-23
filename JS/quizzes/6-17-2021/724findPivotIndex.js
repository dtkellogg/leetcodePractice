nums = [1,7,3,6,5,6]

var pivotIndex = function(nums) {
    let left = 0
    let right = nums.length - 1
    
    while(left < right) {
        for(let i=0; i<nums.length; i++) {
            const leftSum = nums.slice(0,i).reduce((a,c) => a + c, 0)
            const rightSum = nums.slice(i+1).reduce((a,c) => a + c, 0)

            console.log(`leftSum: ${leftSum}, rightSum: ${rightSum}`)
            
            if(leftSum === rightSum) return i

            left++
            right--
        }
    }
    
    return -1
};

console.log(pivotIndex(nums))