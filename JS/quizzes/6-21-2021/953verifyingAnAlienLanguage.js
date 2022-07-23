words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"

const isAlienSorted = (words, order) => {
    const wordOrder = new Map()
    
    for(i = 0; i < order.length; i++) {
        wordOrder.set(order[i], i)
    }
    

    for(word = 0; i < words.length; word++) {
        for(i = 0; i < word.length - 1; i++) {
            if(wordOrder.get(word[i]) > wordOrder.get(word[i+1])) return false
        }
    }
};

console.log(isAlienSorted(words, order))