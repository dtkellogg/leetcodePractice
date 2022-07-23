s = "abc", t = "ahbgdc"

var isSubsequence = function(s, t) {
    let idx = 0
    
    for(let i = 0; i < t.length; i++) {
        if(t[i] === s[idx]) {
            console.log(`i: ${i}, t[i]: ${t[i]}, s[idx]: ${s[idx]}`)
            idx++
        }
    }

    console.log(`idx: ${idx}`)
    
    return idx === s.length
};

console.log(isSubsequence(s,t))