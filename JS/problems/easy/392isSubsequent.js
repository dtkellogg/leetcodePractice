s = "abc", t = "ahbgdc"

// below doesn't work
// var isSubsequence = function(s, t) {
//     return t.split("").filter((char) => s.includes(char)).join("") === s
// };

// 2 pointer solution
var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while( j < t.length) {
        if(s[i] === t[j]) {
            i++;
        }
        j++;        
    }

    console.log(s)
    return i === s.length
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(isSubsequence(s, t))