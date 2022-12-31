s = "Let's take LeetCode contest"

// 🔥🔥🔥
var reverseWords = function(s) {
    let res = '';
    let word = '';
    for (let c of s) {
        console.log(`c: ${c}, word: ${word}, res: ${res}`);
        if (c === ' ') {
            res += word + c;
            word = '';
        } else {
            word = c + word;
        }
        console.log(object)
    }
    return res + word;
};





////////////////////////////////////////////////////////////////
// the function directly below is 84ms (faster than 91.5%)
// var reverseWords = function(s) {
//     const desired = []
//     const words = s.split(" ")
    
//     words.map((word) => {
//         desired.push(word.split("").reverse().join(""))
//     })
    
//     return desired.join(" ")
// };


//  mine:
// var reverseWords = function(s) {
//     return s.split(" ").map((word) => {
//         const chars = word.split("")
//         return chars.reverse().join("")
//     }).join(" ")
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE



console.log(reverseWords(s))