s = "is2 sentence4 This1 a3"  // Output: "This is a sentence"

// my attempt:
var sortSentence = function(s) {
    let res = []
    for(let i = 1; i <= s.length; i++) {
        s.indexOf(i)
    }
};

////////////////////////////////

const sortSentence = function(s) {
   return s.split(' ')
       .sort((a,b) => a[a.length-1] - b[b.length-1])
       .map((word) => word.slice(0, word.length-1))
       .join(' ');
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(sortSentence(s))