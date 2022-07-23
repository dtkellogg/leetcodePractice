s = "()"

var isValid = function(s) {
    const key = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    
    let arr = []
    
    for(let i=0; i< s.length; i++) {
        console.log(arr)
        if(key[s[i]]) {
            arr.push(key[s[i]])
        } else if (s[i] !== arr.pop()) {
            return false
        }
    }
    
    return !arr.length
}

console.log(isValid(s))