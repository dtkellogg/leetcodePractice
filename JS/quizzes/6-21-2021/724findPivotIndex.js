nums = [1,7,3,6,5,6]

var pivotIndex = function(nums) {
    
    for(let i = 0; i < nums.length; i++) {
        const loSum = nums.slice(0, i).reduce((a,c) => a + c, 0)
        const hiSum = nums.slice(i+1).reduce((a,c) => a + c, 0)

        console.log(`loSum: ${loSum}, hiSum: ${hiSum}`)
        
        if(loSum === hiSum) return i
    }

    return -1
};

console.log(pivotIndex(nums))