s = "A man, a plan, a canal: Panama"
s = "A man, a plan, a canal -- Panama"

var isPalindrome = function(s) {
    const modifiedStr = s.toLowerCase().replace(/[^a-z0-9]+/g, "")

    console.log(modifiedStr)

    return modifiedStr === modifiedStr.split("").reverse().join("")
};

console.log(isPalindrome(s))