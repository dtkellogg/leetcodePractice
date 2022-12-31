words = ["bella","label","roller"]
words = ["cool","lock","cook"]

var commonChars = function(words) {
    let chars1 = words[0].split("")
    return chars1.filter((char) => words[1].includes(char) && words[2].includes(char))
};

// var commonChars = function(A) {
//     let originalChars = A[0].split('');
//     for (let i = 1; i < A.length; i++) {
//         let tempChars = A[i].split('');
//         originalChars = originalChars.filter(char => {
//             let ind = tempChars.indexOf(char);
//             return ind > -1 ? tempChars[ind] = true : false;
//         });
//     }
//     return originalChars;
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(commonChars(words))