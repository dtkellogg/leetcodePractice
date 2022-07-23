s = "codeleet", indices = [4,5,6,7,0,2,1,3]

// var restoreString = function(s, indices) {
//     var len = indices.length;
//     var str = new Array(len);     

//     console.log(str.length)


//     for(let i=0; i<len;i++){
//         str[indices[i]] = s[i];
//     }
//     return str.join("");  
// };

////////////////////////////////////////////////////////////////
// PRACTICE

////////////////////////////////////////////////////////////////
// my solution (81%... 94% memory):
var restoreString = (s, indices) => {
    let map = Array(indices.length ).fill(0)
    for(let i = 0; i <= indices.length; i++) {
        map[i] = s[indices.indexOf(i)];
    }
    return map.join("")
}

console.log(restoreString(s, indices));