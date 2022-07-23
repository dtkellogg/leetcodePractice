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


////////////////////////////////////////////////////////////////
// recusion:
var reverseString = function(s) {
    if (s.length == 0) {
        return;
    }
    var temp = s[0];
    s.shift();
    reverseString(s);
    s.push(temp);
};


// cheating way:
// var reverseString = function(s) {
//     return s.reverse()
// };

console.log(reverseString(s))