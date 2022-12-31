s = "aba"


// 2 pointers:
// var validPalindrome = function(s, corrections = 1) {
//   let lo = 0;
//   let hi = s.length - 1;

//   while (lo < hi) {
//     if (s[lo] === s[hi]) {
//       lo++;
//       hi--;
//       continue;
//     }
    
//     if (corrections === 0) {
//       return false;
//     }
    
//     // below checks if taking off the first of last letter would make it a palindrome
//     return validPalindrome(s.slice(lo, hi), 0) 
//         || validPalindrome(s.slice(lo + 1, hi + 1), 0);
//   }
  
//   return true;
// };


////////////////////////////////////////////////////////////////
// This solution is better - O(n) ... but actually.... it uses reverse()...
const validPalindrome = (s) => {
    for (let i = 0, stop = s.length / 2; i < stop; i++) {
        let j = s.length - i - 1
        if (s[i] !== s[j]) {
            return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
        }
    }
    return true
};

const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

const isPalindrome = (s) => s === s.split('').reverse().join('');



////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(validPalindrome(s))