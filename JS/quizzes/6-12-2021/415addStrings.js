num1 = "11", num2 = "123"

var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let sum = ""
    let carry = 0
    
    for(; i>= 0 || j>=0 || carry>0; i--, j--) {
        const digit1 = i >= 0 ? num1[i] : 0
        const digit2 = j >= 0 ? num2[j] : 0

        console.log(`i: ${i}, j: ${j}`)
        console.log(`digit1: ${digit1}, digit2: ${digit2}`)
        
        const digitSum = +digit1 + +digit2 + carry
        sum =  `${digitSum % 10}${sum}`
        carry = Math.floor(digitSum / 10)
        console.log(`digitSum: ${digitSum}`)
    }
    
    return sum
};

console.log(addStrings(num1, num2))