s = "aa", p = "a"  // Output: false


// recursive solution:
const isMatch = (string, pattern) => {
    // early return when pattern is empty
    if (!pattern) {
		// returns true when string and pattern are empty
		// returns false when string contains chars with empty pattern
        return !string;
    }
    
	// check if the current char of the string and pattern match when the string has chars
    const hasFirstCharMatch = Boolean(string) && (pattern[0] === '.' || pattern[0] === string[0]);

    // track when the next character * is next in line in the pattern
    if (pattern[1] === '*') {
        // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).  That's because the current pattern may be skipped.
        // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern, we must be sure that the current pattern char matches the char
		// If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).  That's because current char matches the pattern char. 
        return (
            isMatch(string, pattern.slice(2)) || 
            (hasFirstCharMatch && isMatch(string.slice(1), pattern))
        );
    }
    
    // now we know for sure that we need to do 2 simple actions
	// check the current pattern and string chars
	// if so, then can proceed with next string and pattern chars (s+1, p+1)
    return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};


////////////////////////////////////////////////////////////////
// dp solution:

// var isMatch = function(s, p) {
//     const dp = {}

//     /*
//      * i and j and the indexes in s and p
//      * check(i, j) means checking if s[i:] and p[j:] can match
//      */
//     const check = (i, j) => {
//         const key = `${i}:${j}`
//         // base cases
//         // result is calculated
//         if (dp[key] !== undefined) {
//             return dp[key]
//         }
//         // out of range
//         if (i > s.length) {
//             return false
//         }
//         // all chars in s and p are checked
//         if (i === s.length && j === p.length) {
//             return true
//         }
//         let result
//         // recursive cases
//         // s[i] and p[j] are the same char or p[j] is a dot
//         if (s[i] === p[j] || p[j] === ".") {
//             // the symbol is followed by a star
//             if (p[j + 1] === "*") {
//                 // match 1 occurence in s or
//                 // skip p[j]* by repeating 0 occurences
//                 result = check(i + 1, j) || check(i, j + 2)
//             } else { // is not followed by a star
//                 result = check(i + 1, j + 1)
//             }
//         } else { // the s[i] and p[j] are not the same char
//             // try to skip p[j]* by repeating 0 occurences
//             if (p[j + 1] === "*") {
//                 result = check(i, j + 2)
//             } else { // p[j] is not skippable. match fail
//                 result = false
//             }
//         }
//         dp[key] = result
//         return result
//     }
//     return check(0, 0)
// };

console.log(isMatch(s, p))