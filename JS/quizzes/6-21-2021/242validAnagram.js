s = "anagram", t = "nagaram"

var isAnagram = function(s, t) {
//     s.split("").sort((a, b) => a - b)
//     t.split("").sort((a, b) => a - b)

    console.log(s.split("").sort((a, b) => a - b).join(""))
    console.log(t.split("").sort((a, b) => a - b).join(""))

    return  s.split("").sort().join("") ===  t.split("").sort().join("")
};

console.log(isAnagram(s,t))