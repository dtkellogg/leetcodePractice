s = "A man, a plan, a canal: Panama"

var isPalindrome = function(s) {
    const modifiedS = s.replace(/[^a-z0-9]/gi, "").toLowerCase()
    console.log(modifiedS)
    return modifiedS.split("").reverse().join("") === modifiedS
};

console.log(isPalindrome(s))