words = ["w","wo","wor","worl","world"]

// var longestWord = function(words) {
//   words.sort();
//   let set = new Set();
//   let res = '';

//   for (let word of words) {

//     if (word.length === 1 || set.has(word.slice(0, -1))) {
//       set.add(word);
//       if (word.length > res.length) {
//           res = word;
//       }
//     }
//   }
//   return res;
// };
////////////////////////////////////////////////////////////////

var longestWord = function(words) {
    let dictionary = {}
    let res = ""
    
    words.sort()
    
    for(const word of words) {
        if(word.length === 1 || dictionary.hasOwnProperty(word.slice(0,word.length-1))) {
            dictionary[word] = word
            
            if(word.length > res.length) res = word
        }
    }

    console.log(dictionary)
    
    return res
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(longestWord(words))