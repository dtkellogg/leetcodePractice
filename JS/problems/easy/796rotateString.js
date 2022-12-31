s = 'abcde', goal = 'cdeab'
s = '', goal = ''
s = '', goal = 'a'

// this solution is a bit less intuitive... but pretty smart
var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false
    return (goal + goal).indexOf(s) > -1
};

// var rotateString = function(s, goal) {
//     if(s === goal) return true

//     for(let i = 0; i < s.length; i++) {
//         s = s.slice(1) + s[0]

//         console.log(`s: ${s}`)
//         if(s === goal) return true
//     }
    
//     return false
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(rotateString(s, goal))