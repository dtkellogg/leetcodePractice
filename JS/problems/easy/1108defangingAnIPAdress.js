address = "1.1.1.1"  // Output: "1[.]1[.]1[.]1"


// 2 RegEx solutions:
var defangIPaddr = function(address) {
    return address.replace(/\./gi, "[.]")
};

////////////////////////////////////
// this also works!
var defangIPaddr = function(address) {
    return address.split('.').join('[.]');
};


////////////////////////////////////
// non-regEx (non cheating)

// var defangIPaddr = function(address) {
//     var result="";
//     for(char of address) {
//         if(char === ".")
//             result += "[.]";
//         else
//             result += char;
//     }
//     return result;    
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(degangIPaddr(address))