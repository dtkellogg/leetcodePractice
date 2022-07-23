x = 121

var isPalindrome = function(x) {
    if(x < 0) return false
    const reversed = x.toString().split("").reverse().join('')

    console.log(reversed)
    return Number(reversed) === x
};

console.log(isPalindrome(x))