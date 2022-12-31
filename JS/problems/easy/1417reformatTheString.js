s = "a0b1c2"
s = "ab123"

var reformat = function(s) {
    let a = [], b = [];

    for (x of s) {
        isNaN(x) ? a.push(x) : b.push(x);
    }
    console.log(a)
    console.log(b)
    if (a.length < b.length) {
        [a, b] = [b, a];
    }
    console.log(a)
    console.log(b)
    return a.length - b.length <= 1
        ? a.map((x, i) => x + (b[i] ? b[i] : '')).join('')
        : '';
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE


console.log(reformat(s))