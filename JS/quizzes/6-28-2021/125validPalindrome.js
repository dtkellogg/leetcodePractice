s = "ab_a"
s = "0P"

var isPalindrome = function(s) {
    const modifiedStr = s.toLowerCase().replace(/[^a-z]/g, "")
    console.log(modifiedStr)
    return modifiedStr === modifiedStr.split("").reverse().join("")
};

console.log(isPalindrome(s))