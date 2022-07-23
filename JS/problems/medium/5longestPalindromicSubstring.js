s = "babad" // Output: "bab"
s = "babababa" // Output: "bababab"


// 2D DP
var longestPalindrome = function(s) {
    
	if(s.length <= 1) return s;
	
	// construct a 2D array
    const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
	
    let lps = '';
    
	// base case for one character
    for(let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        lps = s[i];
    }
    
	// base case for two characters
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) dp[i][i+1] = true;
        if(dp[i][i+1]) lps = s.substring(i, i + 2);
    }

    // expand to three or more characters
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
            if(dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
        }
    }
    
    return lps;
}

////////////////////////////////////////

// function longestPalindrome(s) {
//   let ll = 0, rr = 0;
  
//   for (let i = 0; i < s.length; i++)
//     for (let j of [i, i+1])
//       for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++) {
//         [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];

//         console.log(`l: ${l}, r: ${r}, ll: ${ll}, rr: ${rr}`)
//         console.log("s.substring(ll, rr+1):")
//         console.log(s.substring(ll, rr+1))
//         console.log("----------------------------------------------------------------")
//       }
  
//   return s.substring(ll, rr+1);
// }

// same as above, but w/o comments
// function longestPalindrome(s) {
//   let ll = 0, rr = 0;
  
//   for (let i = 0; i < s.length; i++)
//     for (let j of [i, i+1])
//       for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
//         [ll, rr] = (r-l+1) > (rr-ll+1) ? [l, r] : [ll, rr];
  
//   return s.substring(ll, rr+1);
// }







////////////////////////////////////////////////////////////////


// var longestPalindrome = function(s) {
//   var max = '';
//   for (var i = 0; i < s.length; i++) {
//     for (var j = 0; j < 2; j++) {
//       var left = i;
//       var right = i + j;
//       while (s[left] && s[left] === s[right]) {
//         left--;
//         right++;
//       }
//       if ((right - left - 1) > max.length) {
//         max = s.substring(left + 1, right);
//       }
//     }
//   }
//   return max;
// };

//// below is same as above w/ comments

// Expand Around Center solution
// T O(N^2)
//         The outermost for loop from 0 to <s.length is the first N. The first nested for loop is only from 0 to <2, which is constant time, so it can be ignored. The most deeply nested loop is the while loop, which has worst case O(N). O(N) [outermost loop] * O(N) [innermost while loop, ignoring constant time for loop from 0 to <2] gets you O(N^2)
// S O(1)
// var longestPalindrome = function(s) {
//   var max = '';
//   for (var i = 0; i < s.length; i++) {
//     // this loop is to take into account 
//     // different palindromes like 'aba' and 'abba'
//     for (var j = 0; j < 2; j++) {
//       var left = i;
//       var right = i + j;

//       console.log(`left: ${left}, right: ${right}`)

//       while (s[left] && s[left] === s[right]) {
//         console.log("WHILE LOOP")
//         console.log(`s[left]: ${s[left]}, s[right]: ${s[right]}`)

//         left--;
//         right++;
//       }
//       // here imagine we get into string like
//       // "sabbad", then
//       // right = 5
//       // left = 0
//       // and actual length of "abba" should be "4"
//       // 5 - 0 - 1 === 4
//       if ((right - left - 1) > max.length) {
//         max = s.substring(left + 1, right);
//       }

//       console.log(`left: ${left}, right: ${right}`)
//       console.log(`max: ${max}`)
//       console.log("------------------")
        
//     }
//   }
//   return max;
// };

console.log(longestPalindrome(s))