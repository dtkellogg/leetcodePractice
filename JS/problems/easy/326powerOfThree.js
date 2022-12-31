n = 27


// both of these solutions work (from others)

// n.toString(3) uses the concept of radix and makes number n into a string with a base of 3, a ternary number
    // So if n was a power of 3, n.toString(3) would be 1, 10, 100, or 10...0 .
    // use split() to make the string into an array
    // use reduce() to count the total of each digit
    // if the total is equal to 1, the number n is a power of 3

// var isPowerOfThree = function(n) {
//     return n.toString(3).split("").reduce((prev,curr)=>parseInt(prev)+parseInt(curr))==1;
// };

// var isPowerOfThree = function(n) {
//     return /^10*$/.test(n.toString(3));
// };

////////////////////////////////////////////////////////////////
// 🔥🔥🔥
var isPowerOfThree = function(n) {
    return Number.isInteger(Math.log10(n) / Math.log10(3))
};

////////////////////////////////////////////////////////////////

// my solution


// var isPowerOfThree = function(n) {
//     if(n <= 0) return false
    
//     const power = Math.log10(n) / Math.log10(3)
//     return power === Math.floor(power)
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(isPowerOfThree(n))