word = "a123bc34d8ef34"
word = "a1b01c001"  // Output: 1

// var numDifferentIntegers = function(word) {
//     return ((word.replace(/[a-z]/gi, ","))).split(",")
//     // return (new Set(word.replace(/[a-z]/gi, " "))).size
// };

var numDifferentIntegers = function(word) {
    let set = word.split(/[^\d]/g).filter(_ => _)
    return set
    // arr.filter(_ => _).map(_ => _.replace(/0*(\d)/, '$1'))
    // return new Set(arr).size
};



////////////////////////////////////////////////////////////////
// my solution:
// var numDifferentIntegers = function(word) {
//     let count = 0;
//     for(let i = 0, j = 0; i < word.length; i++) {
//         if(word[i])
//     }
// }


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(numDifferentIntegers(word))