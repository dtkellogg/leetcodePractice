num = 38

// var addDigits = function(num) {
//     if (num < 10) return num
    
//     return addDigits(
//         num.toString().split("").reduce((a,c) => a + +c, 0)
//     )
// };


////////////////////////////////////////////////////////////////
// WHY DOES THE BELOW VERSION NOT WORK? 
// var addDigits = function(num) {
//     if (isNaN(num) || num === 0) return 0;
//     if (num < 10) return num
    
//     return addDigits(
//         num.toString().split("").reduce((a,c) => {
//             a + +c
//             console.log(`a: ${a}, c: ${c}`)
//         }, 0)
//     )
// };


var addDigits = function(num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};

////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(addDigits(num))