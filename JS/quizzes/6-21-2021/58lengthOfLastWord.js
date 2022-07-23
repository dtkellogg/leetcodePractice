s = "Hello World"

var lengthOfLastWord = function(s) {
    const words = s.split(" ")
    if(words.length > 1) {
        return words[words.length - 1].length
    }
}

console.log(lengthOfLastWord(s))