number = "1-23-45 6"  // Output: "123-456"
// number = "123 4-567" // Output: "123-45-67"
// number = "123 4-5678"  // Output: "123-456-78"
// number = "12"  // Output: "12"
number = "--17-5 229 35-39475 "  // Output: "175-229-353-94-75"

// var reformatNumber = function(number) {
//     let cleaned = number.replace(/-|\s/g, "")
//     let match = cleaned.match(/^(\d{3})(\d{3,})$/)

//     if(match === null) return number
//     if(match[2].length === 3) {
//         return match[1] + "-" + match[2]
//     } else if(match[2].length === 4) {
//         return match[1] + "-" + match[2].slice(0,2) + "-" + match[2].slice(2)
//     } else if(match[2].length === 5) {
//         return match[1] + "-" + match[2].slice(0,3) + "-" + match[2].slice(3)
//     }
// };


var reformatNumber = function(number) {
    number = number.replace(/-|\s/g, "")

    let res = []
    
    // divide by 3 numbers
    while (number.length > 4){
        res.push(number.substring(0,3))   // .slice() does literally the same if you replace it directly
        number = number.substring(3)      // .slice() does literally the same if you replace it directly
    }
        console.log(`number: ${number}`)

    // the rest divide by 2
    if (number.length == 4){
        res.push(number.substring(0,2));  // .slice() does literally the same if you replace it directly
        number = number.substring(2)      // .slice() does literally the same if you replace it directly
        res.push(number);
    } else {
        console.log(`number: ${number}`)
        res.push(number)
    }
        
    return res.join('-')
};


console.log(reformatNumber(number))