x = 121
x = 1234321
x = 12321

// var isPalindrome = function(x) {
//     return x.toString() === x.toString().split("").reverse().join("")
// };


////////////////////////////////////////////////////////////////
// 🔥🔥🔥 fast / speed optimized version:
var isPalindrome = function(x) {
    if (x < 0) return false;        // only positive number
    if (x < 10) return true;        // for 1-9 cases
    if (x % 10 === 0) return false; // in case of last 0 [3330, 123320, 1000, etc]
    let rev = 0;                    // reversed number
    while (x >= 10) {
        let cur = x % 10;
        rev = rev*10 + cur;

        console.log(`x: ${x}, cur: ${cur}, rev: ${rev}`)

        if (x === rev) return true; // check before changing

        x = ~~(x / 10); // better replace for Math.floor(), bit operator '~' inverts all the bits in your number and in the process converts the number to an int
        console.log(`x: ${x}`)
        if (x === rev) return true; // check after changing
        if (x < rev) return false;  // stop in case reversed number becomes greater than original value

        console.log("-----------------------------")
    }
    return false; // the longest case (diff in the middle) // [77778777, 10004001] 
};


////////////////////////////////////////////////////////////////
// function isPalindrome(x) {
//   if (x < 0) return false;        // only positive number
//   if (x < 10) return true;        // for 1-9 cases
//   if (x % 10 === 0) return false; // in case of last 0 [3330, 123320, 1000, etc]
    
//   let rev = 0;                    // reversed number
//   while (rev < x) {
//       rev *= 10;
//       rev += x%10;
//       x = Math.trunc(x/10);
//       console.log(`rev: ${rev}, x: ${x}`)
//   }
// //   console.log(`rev: ${rev}, x: ${x}`)
//   return rev === x || Math.trunc(rev/10) === x; // the second part after || is if there are an odd num of terms
// }

console.log(isPalindrome(x))