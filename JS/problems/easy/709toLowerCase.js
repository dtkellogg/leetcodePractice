s = "Hello"


// obviously, this works but defeats the purpose
// var toLowerCase = function(s) {
//     return s.toLowerCase()
// };


// 🔥🔥🔥 hex code for letter capital letters between 65 and 90... If it's uppercase, add 32 to make lowercase
var toLowerCase = function(str) {
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if(code >= 65 && code <= 90) {
            code += 32;
        } newStr += String.fromCharCode(code);
    } 
    return newStr;
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(toLowerCase(s))