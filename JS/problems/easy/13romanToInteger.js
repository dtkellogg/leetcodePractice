s = "III"

// var romanToInt = function(s) {
//  const key = {
//     I:1,
//     V:5,
//     X:10,
//     L:50,
//     C:100,
//     D:500,
//     M:1000
//   };
//   let sum = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (key[s[i]] < key[s[i+1]]) {
//       sum += key[s[i+1]] - key[s[i]];
//       i++; // this skips an iteration, or increases 1 by 2 with the i++ on line 17
//     } else {
//       sum += key[s[i]];
//     }
//   }

//   return sum;
// };

symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var romanToInt = function(s) {
  value = 0;
  for(let i = 0; i < s.length; i+=1){
    symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
  }
  return value
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var romanToInt = function(s) {
}

console.log(romanToInt(s))