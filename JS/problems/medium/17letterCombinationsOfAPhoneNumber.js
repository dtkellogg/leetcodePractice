digits = "23" // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// digits = "123"


// DFS solution (depth-first search)
const letterCombinations = (digits) => {
  if (digits == null || digits.length === 0) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const res = [];
  const go = (i, s) => {

    console.log(`i: ${i}, s: ${s}, res: ${res}`);

    if (i === digits.length) {

      console.log("IF")

      res.push(s);
      return;
    }

    for (const c of map[digits[i]]) {

      console.log("GO")
      console.log(`c: ${c}, map[digits[i]]: ${map[digits[i]]}`)
      console.log("--------------------------------------")

      go(i + 1, s + c);
    }

    console.log("----------------------------------------------------------------------------")

  };

  go(0, '');
  return res;
};

// same algorithm as above, but w/o comments
// const letterCombinations = (digits) => {
//   if (digits == null || digits.length === 0) return [];

//   const map = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxyz',
//   };

//   const res = [];
//   const go = (i, s) => {
//     if (i === digits.length) {
//       res.push(s);
//       return;
//     }
//     for (const c of map[digits[i]]) {
//       go(i + 1, s + c);
//     }
//   };

//   go(0, '');
//   return res;
// };

// PRACTICE
// const letterCombinations = (digits) => {
//   let res = [];
//   if(digits.length === 0) return res;

//   const map = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxyz',
//   }

//   const go = (i, s) => {
//     if(i === digits.length) {
//       res.push(s)
//       return
//     }
//     for(const c of map[digits[i]]) {
//       go(i+1, c+s)
//     }
//   }

//   go(0, "")
//   return res
// }

console.log(letterCombinations(digits))