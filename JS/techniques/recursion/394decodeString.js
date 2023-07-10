s = "3[a]2[bc]"  // Output: "aaabcbc"
s = "3[a2[c]]" // Output: "accaccacc"

// recursive solution:
var decodeString = function(s) {
  return helper(s, "")
  
  function helper(s, str){
    let num = 0;
    for(let i = 0; i < s.length; i++){
      let x = s.substr(i, 1);
      
      if(x == '['){
        let result, n;
        [result, n] = helper(s.substr(i+1), "");
        while(num > 0){
          str += result;
          num--;
        }
        i += n;
      }
      else if(x == ']') return [str, ++i]
      
      else if(!isNaN(x)) num = num*10 + parseInt(x);
      else str += x;
    }
    return str
  }
};

////////////////////////////////////////////////////////////////
// Using Regex:
// var decodeString = function(s) {
//     myReg = /(\d+)?\[([a-zA-Z]+)\]/;
//     while(myReg.test(s)) {
//         s = s.replace(myReg, (full, num, str) => {
//             return num === undefined ? str : str.repeat(num);
//         });
//     }
//     return s;
// };

/////////////////////////////////////////////////////////////////////////////////////////////
// another Regex:
// var decodeString = function(s) {
//     const replacer = (match, p1, p2, p3, string) => {

//         console.log(`match: ${match}, p1: ${p1}, p2: ${p2}, p3: ${p3}, string: ${string}`)

//         return p3.repeat(p1);
//     }
//     while(/\d/.test(s)) {
//         s = s.replace(/(\d+)(\[([a-zA-Z]+)\])/g, replacer);    
//     }
//     return s;
// };

// same algorithm as before, but w/o comments

var decodeString = function(s) {
    const replacer = (match, p1, p2, p3, string) => {
        return p3.repeat(p1);
    }
    while(/\d/.test(s)) {
        s = s.replace(/(\d+)(\[([a-ZA-Z]+)\])/g, replacer)
    }
    return s
};

// PRACTICE

// var decodeString = (s) => {
//     const replacer = (match, p1, p2, p3, string) => {
//         return p3.repeat(p1);
//     }
//     while(/\d/.test(s)) {
//         s = s.replace(, replacer)
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
// Using stack:
// const decodeString = s => {
//   const stack = [];
//   for (const char of s) {
//     if (char !== "]") { stack.push(char); continue; }
//     let cur = stack.pop();
//     let str = '';
//     while (cur !== '[') {
//       str = cur + str;
//       cur = stack.pop();
//     }
//     let num = '';
//     cur = stack.pop();
//     while (!Number.isNaN(Number(cur))) {
//       num = cur + num;
//       cur = stack.pop();
//     }
//     stack.push(cur);
//     stack.push(str.repeat(Number(num)));
//   }
//   return stack.join('');
// };



////////////////////////////////////////////////////////////////
// PRACTICE

const decodeString = s => {
}

console.log(decodeString(s))