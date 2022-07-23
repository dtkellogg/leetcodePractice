paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
paragraph = "a.", banned = []
var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned)
    const wordsMap = new Map()
    const words = paragraph.toLowerCase().split(/[\W_]+/)
    // const words = paragraph.toLowerCase().replace(/[\W_]+/gi, " ").split(" ")

    console.log(words)

    for(const word of words) {
        if(!bannedSet.has(word)) {
            wordsMap.set(word, wordsMap.has(word)
                ? wordsMap.get(word) + 1
                : 1
            )
        }
    }

    console.log(wordsMap)

    for(const [k, v] of wordsMap) {
        if(v !== 1) return k
    }

    // return wordsMap
}

console.log(mostCommonWord(paragraph, banned))