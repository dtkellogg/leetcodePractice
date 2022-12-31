s = "anagram", t = "nagaram"

// var isAnagram = function(s, t) {
//     return s.split("").sort().join("") === t.split("").sort().join("")
// };


////////////////////////////////////////////////////////////////

// function isAnagram(s, t) {
// 	const map = {};
// 	s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
// 	t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
// 	return Object.keys(map).every(k => map[k] === 0);
// }

////////////////////////////////////////////////////////////////
// A more concise memory solution is as follows (it also breaks out early unlike the prior one):

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    
    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]--;
            if (map[t[i]] == 0) delete map[t[i]];
        }
        else return false;    
    }

    return true;
};

////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(isAnagram(s, t))