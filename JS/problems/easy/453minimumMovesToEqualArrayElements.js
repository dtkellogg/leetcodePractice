nums = [1,2,3]

var minMoves = function(nums) {
    var min = nums.reduce((el, acc) => { return el < acc ? el : acc }, nums[0])
    return nums.reduce((el, acc) => { return acc + (el - min)}, 0);    
};

// this one is faster
var minMoves = function(nums) {
    var min = nums[0];
    var sum = min;
    var len = nums.length;

    for(let i = 1; i < len; i++) {
        sum += nums[i];
        min = nums[i] < min 
            ? nums[i] 
            : min;
    }

    return sum - len * min;
};

var minMoves = function(nums) {
    let min = nums[0]
    let sum = 0
    
    for(let num of nums) {
        sum += num
        min = num < min 
            ? num
            : min
        console.log(`min: ${num < min}`)
    }

    
    return sum - nums.length * min
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(minMoves(nums))