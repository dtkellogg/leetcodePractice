s = "eggs", t = "addd"


// This one is wayyyy faster than the second one below:
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    if (s === t) {
        return true;
    }
    const obj1 = {};
    const obj2 = {};
    for(let i = 0; i < s.length; i++) {
        const letter = s[i];
        const tLetter = t[i];
        if (!obj2[tLetter]) {
            obj2[tLetter] = letter;
        }
        if (!obj1[letter]) {
            obj1[letter] = tLetter;
        }
        if (obj1[letter] !== tLetter || obj2[tLetter] !== letter) {
            return false;
        }
    }
    return true;
};
////////////////////////////////
// Why is this one so much slower?
var isIsomorphic = function(s, t) {
    var obj = {};

    for(var i = 0; i < s.length; i++){
        if(!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
        if(!obj['t' + t[i]]) obj['t' + t[i]] = s[i];

        console.log(`t[i]: ${t[i]}, s[i]: ${s[i]}`)
        if(t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false;

        console.log(obj)
    }
    return true;
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var isIsomorphic = function(s, t) {
}

console.log(isIsomorphic(s,t))