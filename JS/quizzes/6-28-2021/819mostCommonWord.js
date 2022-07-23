paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"

var mostCommonWord = function(paragraph, banned) {
    const bannedSet = new Set(banned)
    let wordsMap = new Map()
    const words = paragraph.toLowerCase().split(/\W+/)
    let ans = {count: 0, word: ""}
    
    for(const word of words) {
        if(!bannedSet.has(word)) {

            console.log(`word: ${word}`)

            wordsMap.set(word, wordsMap.has(word) ?
                wordsMap.get(word) + 1
                :
                1
            )

            if(ans.count < wordsMap.get(word)) {
                ans.count = wordsMap.get(word)
                ans.word = word
            }
        }
    }

    console.log("words")
    console.log(words)

    console.log("wordsMap")
    console.log(wordsMap)
    console.log("bannedSet")
    console.log(bannedSet)

    return ans.word
}

console.log(mostCommonWord(paragraph, banned))