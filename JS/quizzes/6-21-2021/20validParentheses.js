s = "())"

var isValid = function(s) {
    const key = {
        "(": ")",
        "{": "}",
        "[": "]",
    }
    let output = []
    
    for(let i = 0; i < s.length; i++) {
        console.log(output)
        if(key[s[i]]) {
            output.push(key[s[i]])
        } else if (s[i] !== output.pop()) {
            return false
        }
    }

        console.log(output.length)

    
    return !output.length
};

console.log(isValid(s))