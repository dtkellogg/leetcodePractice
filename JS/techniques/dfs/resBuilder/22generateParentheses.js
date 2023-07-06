n = 4
// Output: 
// [
// "((()))",
// "(()())",
// "(())()",
// "()(())",
// "()()()"
// ]

////////////////////////////////////////////////////////////////
// Backtracking + DFS

// function generateParenthesis(n) {
//   const res = [];

//   function go(l, r, s) {  // l: left remaining, r: right remaining
//     // if (l > r) return;  // The number of '(' should be always >= ')'

//     console.log(`l: ${l}, r: ${r}, s: ${s}`);
//     console.log("----------------------------------------------------------------")


//     if (l === 0 && r === 0) {
//       res.push(s);
//       console.log("res:")
//         console.log(res)
//       return;
//     }

    

//     console.log("---------------")
//     console.log(`l: ${l}, r: ${r}, s: ${s}`);
//     console.log("---------------")


//     if (l > 0) go(l - 1, r, s + '(');

//     console.log("---------------------------------")
//     console.log(`l: ${l}, r: ${r}, s: ${s}`);
//     console.log("--------------------------------")

//     if (r > 0) go(l, r - 1, s + ')');

//     console.log("---------------------------------------------------")
//     console.log(`l: ${l}, r: ${r}, s: ${s}`);
//     console.log("---------------------------------------------------")


//     console.log("*--------------------------------------------------------------------------------------------------------------------------------")
//   }

//   console.log("GO")

//   go(n, n, '');
//   return res;
// }



////////////////////////////////////////////////////////////////
// 🔥🔥🔥 same as above, but w/o comments:

// function generateParenthesis(n) {
//   const res = [];

//   function go(l, r, s) {  
//     if (l > r) return; 

//     if (l === 0 && r === 0) {
//       res.push(s);
//       return;
//     }

//     if (l > 0) go(l - 1, r, s + '(');
//     if (r > 0) go(l, r - 1, s + ')');
//   }

//   go(n, n, '');
//   return res;
// }




////////////////////////////////////////////////////////////////
// PRACTICE

function generateParenthesis(n) {
  let res = [];

  function go (l, r, s) {
    if(l > r) return

    if( l === 0 && r === 0) res.push(s)

    if(l > 0) go(l - 1, r, s + '(')
    if(r > 0) go(l, r - 1, s + ')')
  }

  go(n,n,'');
  return res
}

console.log(generateParenthesis(n))