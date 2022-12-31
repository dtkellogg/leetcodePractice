n=16

var isPowerOfTwo = function(n) {
    if(n === 0) return false
    
    const power = Math.log2(n)
    return power === Math.floor(power)
};

////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(isPowerOfTwo(n))