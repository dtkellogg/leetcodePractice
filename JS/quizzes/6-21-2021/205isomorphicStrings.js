s = "egg", t = "add"

var isIsomorphic = function(s, t) {
    let sMap = new Map()
    let tMap = new Map()
    
    for(let i = 0; i < s.length; i++) {
        console.log("sMap:")
        console.log(sMap)
        console.log("tMap:")
        console.log(tMap)
        if(sMap.has(s[i])) {
            console.log(`sMap.get(s[i]): ${sMap.get(s[i])}`)
            console.log(`t[i]: ${t[i]}`)
            console.log(`sMap.get(s[i]) !== t[i]: ${sMap.get(s[i]) !== t[i]}`)
            if(sMap.get(s[i]) !== t[i]) return false
        }
        
        if(tMap.has(t[i])) {
            console.log(`sMap.get(s[i]): ${sMap.get(s[i])}`)
            console.log(`t[i]: ${t[i]}`)
            console.log(`tMap.get(s[i]) !== t[i]: ${tMap.get(s[i]) !== s[i]}`)
            if(tMap.get(t[i]) !== s[i]) return false
        }
        
        sMap.set(s[i], t[i])
        tMap.set(t[i], s[i])
    }
    
    return true
};

console.log(isIsomorphic(s,t))