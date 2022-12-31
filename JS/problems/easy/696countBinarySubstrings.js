s = "00110011"

var countBinarySubstrings = function(s) {
    if (s.length <= 1) return 0;
    var preRun = 0; 
    var curRun = 1;
    var count = 0 

    for (var i = 1; i < s.length; i++) { 
        if (s[i - 1] === s[i]) curRun++; 
        else { 
            preRun = curRun; 
            curRun = 1;     
        }
        if (preRun >= curRun) count++;
    }
    return count;   
}


const countBinarySubstrings = (s) => s.replace(/01/g, '0,1').replace(/10/g, '1,0').split(',')
    .reduce((res, a, i, arr) => i ? res + Math.min(a.length, arr[--i].length) : 0, 0);



////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(countBinarySubStrings(s)) 