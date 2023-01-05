n = 3  // Output: ["1","2","Fizz"]
n = 15  // Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]



// 🔥
var fizzBuzz = function(n) {
  return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};



// WHY DOESNT BELOW CODE WORK
// var fizzBuzz = function(n) {
//     let arr = new Array(n).fill(0)
    
//     arr.map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i)
//     console.log(arr)
//     return arr
// };


////////////////////////////////////////////////////////////////
// same idea as 1-liner
var fizzBuzz = function(n) {
    let res = [];
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) res.push("FizzBuzz")
        else if(i % 3 === 0) res.push("Fizz")
        else if(i % 5 === 0 ) res.push("Buzz")
        else res.push(i.toString())
    }
    return res
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(fizzBuzz(n))