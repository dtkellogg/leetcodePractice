paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]

var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().split(/\W+/)
    const bannedSet = new Set(banned)
    const count = new Map()
    const answer = {count: 0, word: ""}

    console.log(words)
    
    for(let i = 0; i< words.length; i++) {
        if(!bannedSet.has(words[i])) {
            console.log(count)
            console.log(count.get(words[i]))

            if(count.get(words[i]) !== undefined) {
                console.log(words[i])
                count.set(words[i], count.get(words[i]) + 1)
            } else {
                count.set(words[i], 1)
            }
            
            if(count.get(words[i]) > answer.count) {
                answer.count = count.get(words[i])
                answer.word = words[i]
            }
        }
    }

    
    return answer.word
};

console.log(mostCommonWord(paragraph, banned))