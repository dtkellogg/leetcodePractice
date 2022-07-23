s = "deeedbbcccbdaa", k = 3 // Output: "aa"
// s = "adeeedbbcccbdaa", k = 3 // Output: ""

var removeDuplicates = function(s, k) {
    const stack = [];  // 1. keep track of all chars and their counts.
    
    for(let char of s) {

        console.log(`char: ${char}`)
        console.log("stack")
        console.log(stack)
        console.log("--------------------------------")

        if(stack.length && stack[stack.length-1][0] === char) {
            stack[stack.length-1][1] += 1;  // 2. if char is in bottom (meaning it's a duplicate), += 1.
            if(stack[stack.length-1][1] === k) {  // 4. if char count === k, remove it.
                stack.pop();
            }
        } else {
            stack.push([char, 1]);  // 3. if not duplicate, append to stack with count of 1.
        }
    }
    
    let res = '';
    
    for(let [char, count] of stack) {  // 5. for everything remaining in stack, iterate over and repeat based on its count.
        res += char.repeat(count);
    }
    
    return res;
};

// same algorithm as above, but w/o comments

// var removeDuplicates = function(s, k) {
//     const stack = []; 
    
//     for(let char of s) {
//         if(stack.length && stack[stack.length-1][0] === char) {
//             stack[stack.length-1][1] += 1; 
//             if(stack[stack.length-1][1] === k) { 
//                 stack.pop();
//             }
//         } else {
//             stack.push([char, 1]); 
//         }
//     }
    
//     let res = '';
    
//     for(let [char, count] of stack) { 
//         res += char.repeat(count);
//     }
    
//     return res;
// };

// PRACTICE

var removeDuplicates = (s,k) => {
    let stack = [];

    for(let char of s) {
        if(stack.length && stack[stack.length-1][0] === char) {
            stack[stack.length-1][1] += 1
            if(stack[stack.length-1][1] === k) stack.pop
        } else {
            stack.push([char,1])
        }
    }

    let res = '';

    for(let [char, count] of stack) {
        res += char.repeat(count)
    }

    return res
}

console.log(removeDuplicates(s,k))