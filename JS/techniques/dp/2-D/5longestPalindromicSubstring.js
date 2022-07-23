s = "babad" // Output: "bab"
s = "babababa" // Output: "bababab"
s = "aaaabbaa" // Output: "aabbaa"


// 2D DP
// var longestPalindrome = function(s) {
    
// 	if(s.length <= 1) return s;
	
// 	   construct a 2D array
//     const dp = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));
//     const dp = Array(s.length + 1).fill(Array(s.length + 1).fill(false))  // this doesn't work... why???

//         console.log(dp)
//         console.log("----------------------------------------------------------------")
	
//     let lps = '';
    
// 	// base case for one character
//     for(let i = 0; i < s.length; i++) {
//         console.log(`lps: ${lps}`);
//         dp[i][i] = true;
//         lps = s[i];

//     }

//         console.log(dp)
//         console.log("----------------------------------------------------------------")
    
// 	// base case for two characters
//     for(let i = 0; i < s.length; i++) {
//         console.log(`lps: ${lps}`);
//         if(s[i] === s[i + 1]) dp[i][i+1] = true;
//         if(dp[i][i+1]) lps = s.substring(i, i + 2);
//     }

//         console.log(dp)
//         console.log("----------------------------------------------------------------")

//     // expand to three or more characters
//     for(let i = s.length - 1; i >= 0; i--) {
//         for(let j = i + 2; j < s.length; j++) {
//             console.log(`lps: ${lps}`);
//             dp[i][j] = dp[i+1][j-1] && s[i] === s[j];
//             if(dp[i][j]) lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
//         }
//     }
    
//     return lps;
// }


////////////////////////////////////////////////////////////////
// same thing as above, but w/o comments:

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


////////////////////////////////////////////////////////////////
// PRACTICE

var longestPalindrome = function(s) {
}


console.log(longestPalindrome(s))