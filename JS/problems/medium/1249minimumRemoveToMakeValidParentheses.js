s = "lee(t(c)o)de)" // Output: "lee(t(c)o)de"
s = "))((" //Output: ""
// s = "(a(b(c)d)" // Output: "a(b(c)d)"

var minRemoveToMakeValid = function(str) {
    str = str.split("");
	let stack = [];
    for(let i = 0; i<str.length; i++){
        console.log("stack:")
        console.log(stack)
        
        if(str[i]==="(") {
            console.log("PUSH")
            stack.push(i);
        } else if(str[i]===")"){
            console.log("POP")
            if(stack.length) stack.pop();
            else str[i]=""; // other way of remove char than splice
        }

        console.log(`str: ${str}`)
        console.log("----------------------------------------------------------------")
    }

    console.log("--------------------------------------------------------------------------------------------------------------------------------")

    console.log(str)
    console.log(stack)
    
    for(let i of stack) str[i] = ""; // It handles for the case where there are more ( than ) in s. For example, if s equals "(()", our stack will be equal to [0] after exiting the for loop and we would return "(()" instead of "()" if we didn't have this for loop.
    
    return str.join("");
	
}

////////////////////////////////////////////////////////////////
// Above solution w/o comments
// var minRemoveToMakeValid = function(str) {
//     str = str.split("");
// 	   let stack = [];
//     for(let i = 0; i<str.length; i++){
        
//         if(str[i]==="(") {
//             stack.push(i);
//         } else if(str[i]===")"){
//             if(stack.length) stack.pop();
//             else str[i]=""; // other way of remove char than splice
//         }
//     }

//     for(let i of stack) str[i] = ""; // It handles for the case where there are more ( than ) in s. For example, if s equals "(()", our stack will be equal to [0] after exiting the for loop and we would return "(()" instead of "()" if we didn't have this for loop.
//     return str.join("");
// }





////////////////
// PRACTICE
const minRemoveToMakeValid = (s) => {
    let str = s.split("");
    let stack = [];
    for(let i = 0; i<str.length; i++) {
        if(str[i] === "(") {
            stack.push(i)
        } else if(str[i] === "(") {
            if(stack.length) stack.pop()
            else str[i] = ""
        }
    }

    for(const i of stack) str[i] = "";
    return str.join("")
}

console.log(minRemoveToMakeValid(s))