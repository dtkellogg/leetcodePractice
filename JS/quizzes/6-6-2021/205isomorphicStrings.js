s = "egg", t = "add"

var isIsomorphic = function(s, t) {
    let map = new Map()
    
    for(let i=0; i<s.length; i++) {
        if(!map['s' + s[i]]) {
            map.set('s' + s[i], t[i])
        } else if (!map['t' + t[i]]) {
            map.set('t' + t[i], s[i])
        }
    }
    
    return map
};

console.log(isIsomorphic(s,t))