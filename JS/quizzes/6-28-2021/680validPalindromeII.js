s = "aba"
s = "abc"

var validPalindrome = function(s, tries = 1) {
    let lo = 0
    let hi = s.length - 1
    
    while(lo < hi) {
        if(s[lo] === s[hi]) {
            lo++
            hi--
            continue
        }
        
        if(tries === 0) return false

        if(s === s.split("").reverse()) return true
        
        return (
            validPalindrome(s.slice(lo,hi),0)
                ||
            validPalindrome(s.slice(lo+1,hi+1),0)
        )
    }
    return true
};

console.log(validPalindrome(s))