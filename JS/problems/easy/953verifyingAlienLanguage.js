words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"  // Output: true

var isAlienSorted = function(words, order) {
    for(let i=1;i<words.length;i++) {
        const a = words[i-1]
        const b = words[i]
        const maxLen = Math.max(a.length, b.length)
        
        for(let j=0;j<maxLen;j++) {
            const indexA = order.indexOf(a[j])
            const indexB = order.indexOf(b[j])
            if (indexA > indexB) {
                return false
            } else if (indexA < indexB) {
                j=maxLen
            }
        }
    }
    
    return true
};

// Strategy: build a map using order which for each letter, holds its position in the alien alphabet 
    // (for constant lookup of position). Then using two pointers prev and curr, compare to ensure the 
    // letters in curr hold later positions in the alien alphabet.
// Some Special Cases: If prev and curr's have some of the same letters + order, loop to find 
    // the first !== character and then compare. If one string contains the other, that is, if they are 
    // the same up to a point and then one ends, return false if the one that ends first occurs later. 
    // Ex. "hell" should occur before "hello"

const isAlienSorted = (words, order) => {
    for (let j = 1; j < words.length; j++) {
        let prev = words[j-1];
        let curr = words[j];

        if (order.indexOf(prev[0]) > order.indexOf(curr[0])) {
            return false;
        } else if (prev[0] === curr[0]) {
            let pointer = 1;
            while (prev[pointer] === curr[pointer] && pointer < Math.max(curr.length, prev.length)) {
                pointer++;
            }
            if (
                (order.indexOf(prev[pointer]) >= 0 && !order.indexOf(curr[pointer])) 
                || 
               (order.indexOf(prev[pointer]) > order.indexOf(curr[pointer])
            )) {
                 return false;
            }
        }
    }
    return true;
};

// same as above, but this is the OG i found. I don't think using the 
// memory for a map is necessary

const isAlienSorted = (words, order) => {
    let newMap = new Map();
    for (let i = 0; i < order.length; i++) {
        newMap.set(order[i], i);
    } 

    for (let j = 1; j < words.length; j++) {
        let prev = words[j-1];
        let curr = words[j];

        if (newMap.get(prev[0]) > newMap.get(curr[0])) {
            return false;
        } else if (prev[0] === curr[0]) {
            let pointer = 1;
            while (prev[pointer] === curr[pointer] && pointer < Math.max(curr.length, prev.length)) {
                pointer++;
            }
            if (
                (newMap.get(prev[pointer]) >= 0 && !newMap.get(curr[pointer])) 
                || 
               (newMap.get(prev[pointer]) > newMap.get(curr[pointer])
            )) {
                 return false;
            }
        }
    }
    return true;
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(isAlienSorted(words, order))