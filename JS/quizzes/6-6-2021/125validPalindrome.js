s = "A man, a plan, a canal: Panama"

var isPalindrome = function(s) {
    trimed = s.replace(/[^a-z0-9]/gi, "").toLowerCase()
    return trimed === trimed.split("").reverse().join("")
};

console.log(isPalindrome(s))