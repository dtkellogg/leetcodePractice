s = "{[()]}"  // true

var isValid = function(s) {   
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) {
            stack.push(map[c])
        } else if (c !== stack.pop()) {
            return false;
        } 
    }
    
    return !stack.length;
};

// var isValid = function(s) {   
//     const stack = [];
//     const map = {
//       '(': ')',
//       '[': ']',
//       '{': '}'
//     }
    
//     for (let i = 0 ; i < s.length ; i++) {
//         console.log(stack)
//         let c = s[i];
//         if (map[c]) {
//             console.log(stack)
//             stack.push(map[c])
//         // } else if (c !== stack.pop()) {
//         } else if (c !== map[stack[stack.length - 1]]) {
//             stack.pop();
//         } 
//         console.log(`c: ${c}`)
//         console.log(stack)
//     }
    
//     return !stack.length;
// };

// var isValid = function(s) {
//     const stack = [];
//     const m = {
//         ")": "(",
//         "}": "{",
//         "]": "["
//     };

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
//             stack.push(s[i]);
//             continue;
//         }

//         if (stack.pop() != m[s[i]]) {
//             return false;
//         }

//         console.log(stack)
//     }

//     return stack.length == 0;
// };


// var isValid = function(s) {
//   let key = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   },
//   stack = []

//   for(let i = 0; i < s.length; i++) {
//     if(key[s[i]]) stack.push(key[s[i]])
//     else if (stack.pop() !== s[i]) {
//       return false
//     }
//   }

//   return true
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE
// s = "{[()]}"  // true

var isValid = function(s) {
  const key = {
    '(': ')',
    '[': ']',
    '{': '}'
  },
  stack = []

  for(let i = 0; i < s.length; i++) {
    if(key[s[i]]) stack.push(key[s[i]])
    else if(stack[stack.length - 1] !== s[i]) {
      return false
    }
  }
  return true
}



console.log(isValid(s))