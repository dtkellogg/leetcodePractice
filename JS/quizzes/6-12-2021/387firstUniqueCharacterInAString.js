s = "leetcode"

var firstUniqChar = function(s) {
    let map = new Map()
    
    for(let i=0; i<s.length; i++) {
        map.set(s[i], map.has(s[i]) 
               ? map.get(s[i]) + 1
               : 1
               )
    }

    console.log(map)
    
    for(const [k,v] of map) {
        if (v === 1) return s.indexOf(k)
    }

    return -1
}

console.log(firstUniqChar(s))