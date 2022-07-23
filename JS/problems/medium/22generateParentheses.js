n = 3

function generateParenthesis(n) {
  const res = [];

  function go(l, r, s) {  // l: left remaining, r: right remaining
    console.log(`l: ${l}, r: ${r}`)
    if (l > r) return;  // The number of '(' should be always >= ')'


    if (l === 0 && r === 0) {
      res.push(s);
      console.log("res:")
      console.log(res)
      return;
    }

    console.log(`s: ${s}`)
    if (l > 0) go(l - 1, r, s + '(');
    // console.log(`l: ${l}, r: ${r}`)
    if (r > 0) go(l, r - 1, s + ')');
    console.log(`l: ${l}, r: ${r}`)

    console.log("END")
  }
  console.log("OUTSIDE")

  go(n, n, '');
  return res;
}

// same as above, but w/o comments
// function generateParenthesis(n) {
//   const res = [];

//   function go(l, r, s) {  // l: left remaining, r: right remaining
//     if (l > r) return;  // The number of '(' should be always >= ')'
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

console.log(generateParenthesis(n))