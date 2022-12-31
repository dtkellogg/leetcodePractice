s = "Hello World"

// var lengthOfLastWord = function(s) {
//     const words = s.trim().split(" ")
//     return !words.length ? 0 : words[words.length-1].length
// };


var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var lengthOfLastWord = function(s) {
};


console.log(lengthOfLastWord(s))