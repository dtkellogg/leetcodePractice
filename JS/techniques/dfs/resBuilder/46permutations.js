nums = [1,2,3]  // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


// w/ backtracking:
var permute = function(letters) {
    let res = [];
    dfs(letters, [], Array(letters.length).fill(false), res);
    return res;
}

function dfs(letters, path, used, res) {
    if (path.length == letters.length) {
        // make a deep copy since otherwise we'd be append the same list over and over
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < letters.length; i++) {
        // skip used letters
        if (used[i]) continue;
        // add letter to permutation, mark letter as used
        path.push(letters[i]);
        used[i] = true;
        dfs(letters, path, used, res);
        // remove letter from permutation, mark letter as unused
        path.pop();
        used[i] = false;
    }
}

// w/o comments:
// var permute = function(letters) {
//     let res = [];
//     dfs(letters, [], Array(letters.length).fill(false), res);
//     return res;
// }

// function dfs(letters, path, used, res) {
//     if (path.length == letters.length) {
//         res.push(Array.from(path));
//         return;
//     }
//     for (let i = 0; i < letters.length; i++) {
//         if (used[i]) continue;
//         path.push(letters[i]);
//         used[i] = true;
//         dfs(letters, path, used, res);
//         path.pop();
//         used[i] = false;
//     }
// }






////////////////////////////////////////////////////////////////
// Practice

var permute = function(letters) {
}

console.log(permute(nums))