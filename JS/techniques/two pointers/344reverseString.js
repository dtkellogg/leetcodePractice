s = ["h","e","l","l","o"]


// Using destructuring assignment array matching available in ES6+ though not very effecient.
// var reverseString = function(s) {
//     var i = 0;
//     var j = s.length - 1;
//     while (i < j) {
//         [s[i], s[j]] = [s[j], s[i]];
//         i++;
//         j--;
//     }
// };
// bad way...
// var reverseString = function(s) {
//     return s.reverse()
// };



////////////////////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var reverseString = function(s) {
  let l = 0, r = s.length - 1

  while(l < r) {
    [s[l], s[r]] = [s[r], s[l]]
    l++
    r--
  }

  return s
}

console.log(reverseString(s))