words = ["wo","wor","worl","world", "w"]

var longestWord = function(words) {
    let dictionary = {}
    let res = ""
    
    words.sort()
    
    for(const word of words) {
        console.log(`word: ${word}, word.slice(0,-1): ${word.slice(0,-1)}`)
        if(word.length === 1 || dictionary.hasOwnProperty(word.slice(0,word.length-1))) {
            dictionary[word] = word
            
            if(word.length > res.length) res = word
        }
    }
    
    return res
};

console.log(longestWord(words))