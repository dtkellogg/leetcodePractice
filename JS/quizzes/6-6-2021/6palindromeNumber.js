x = 121

function isPalindrome(x) {
    if(x < 0 ) return false
    if(x === 0 ) return true
    if(x % 10 === 0) return false
    const reversed = x.toString().split("").reverse().join("")
    // return reversed
    return reversed === x.toString()
}

console.log(isPalindrome(x))