s = "aa", p = "a" // Output: false

var isMatch = function(s, p) {
    const dp = {}

    /*
     * i and j and the indexes in s and p
     * check(i, j) means checking if s[i:] and p[j:] can match
     */
    const check = (i, j) => {
        const key = `${i}:${j}`
        // base cases
        // result is calculated
        if (dp[key] !== undefined) {
            return dp[key]
        }
        // out of range
        if (i > s.length) {
            return false
        }
        // all chars in s and p are checked
        if (i === s.length && j === p.length) {
            return true
        }
        let result
        // recursive cases
        // s[i] and p[j] are the same char or p[j] is a dot
        if (s[i] === p[j] || p[j] === ".") {
            // the symbol is followed by a star
            if (p[j + 1] === "*") {
                // match 1 occurence in s or
                // skip p[j]* by repeating 0 occurences
                result = check(i + 1, j) || check(i, j + 2)
            } else { // is not followed by a star
                result = check(i + 1, j + 1)
            }
        } else { // the s[i] and p[j] are not the same char
            // try to skip p[j]* by repeating 0 occurences
            if (p[j + 1] === "*") {
                result = check(i, j + 2)
            } else { // p[j] is not skippable. match fail
                result = false
            }
        }
        dp[key] = result
        return result
    }
    return check(0, 0)
};


////////////////////////////////////////////////////////////////
// Practice 


var isMatch = function(s, p) {
}


console.log(isMatch(s,p))