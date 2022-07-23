num1 = "11", num2 = "123"

var addStrings = function(num1, num2) {
    let carry = 0
    let sum = ""
    
    if(num1.length < num2.length) {
        [num1, num2] = [num2, num1]
    }
    
    for(let i = num1.length - 1; i > 1; i--) {
        const digit1 = parseInt(num1[i])
        const digit2 = parseInt(num2[i])
        const digitSum = digit1 + digit2 + carry

        console.log(`digitSum: ${digitSum}`)
        console.log(`digit1: ${digit1}`)
        console.log(`digit2: ${digit2}`)
        
        sum += digitSum % 10
    }

    return sum
};

console.log(addStrings(num1, num2))