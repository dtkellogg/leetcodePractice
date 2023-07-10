s = ["h","e","l","l","o"]


////////////////////////////////////////////////////////////////
// recusion:
var reverseString = function(s) {
  console.log(`s: ${s}`)

  if (s.length == 0) return;
  var temp = s[0];
  s.shift();

  console.log(`temp: ${temp}`)

  reverseString(s);

  console.log(`temp: ${temp}`)
  console.log(`s: ${s}`)
  s.push(temp);
  console.log(`s: ${s}`)
  console.log("----------------------------------------------------------------")

  // return s
};


//////////////////////////////////////
// 🔥🔥🔥 same as above, but w/o comments

// var reverseString = function(s) {
//     if (s.length == 0) return;
//     var temp = s[0];
//     s.shift();
//     reverseString(s);
//     s.push(temp);
// };


/////////////////////////////////////
// cheating way:
// var reverseString = function(s) {
//     return s.reverse()
// };


////////////////////////////////////////////////////////////////
// PRACTICE

// var reverseString = function(s) {
//     let char = s.pop();
//     reverseString(s)
//     s.push(char)
//     return s
// }

console.log(reverseString(s))