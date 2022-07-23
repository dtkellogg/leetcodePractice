s = "III"
s = "IV"

var romanToInt = function(s) {
    const key = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    
    const chars = s.split("")
    let num = 0
    
    
    for(let i = 0; i < chars.length; i++) {
        console.log(`chars[i]: ${chars[i]}`)
        console.log(key[chars[i]])
        if(key[chars[i]] < key[chars[i+1]]) {
            num -= key[chars[i]]
        } else {
            console.log("hello")

            num += key[chars[i]]
            console.log(`num: ${num}`)
        }
    }
    
    return num
};

console.log(romanToInt(s))