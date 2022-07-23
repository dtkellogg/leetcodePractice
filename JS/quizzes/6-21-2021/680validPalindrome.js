s = "aydmda"

var validPalindrome = function(s, tries = 1) {
    let left = 0
    let right = s.length - 1
    
    while(left < right) {
        if(s[left] === s[right]) {
            left++
            right--
            continue
        }

        if(tries === 0) return false

        return(
            validPalindrome(s.slice(left + 1, right + 1), 0)
            ||
            validPalindrome(s.slice(left, right), 0)
        )
        
    }
    
    return true
};

console.log(validPalindrome(s))