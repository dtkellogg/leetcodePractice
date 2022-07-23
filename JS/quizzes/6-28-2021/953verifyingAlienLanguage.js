words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"

const isAlienSorted = (words, order) => {
    let dictionary = new Map()
    
    for(let i = 0; i < order.length; i++) {
        dictionary.set(order[i], i)
    }

    for(let i = 1; i < words.length; i++) {
        const prev = words[i-1]
        const curr = words[i]

        if(dictionary.get(prev[0]) > dictionary.get(curr[0])) {
            return false
        } else if (prev[0] === curr[0]) {
            let pointer = 1

            while(pointer < words[0].length && dictionary.get(prev[pointer]) === dictionary.get(curr[pointer])) pointer++

            if(dictionary.get(prev[pointer]) > dictionary.get(curr[pointer])) return false

            if(!dictionary.get(curr[pointer]) && dictionary.get(prev[pointer]) > -1) return false

        }

    }

    return true
};

console.log(isAlienSorted(words,order))