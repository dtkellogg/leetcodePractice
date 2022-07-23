num1 = "11", num2 = "123"

var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0
    let sum = ''
    
    for (;i >= 0 || j >= 0 || carry > 0;i--, j--) {
        const digit1 = i < 0 ? 0 : +num1[i]
        const digit2 = j < 0 ? 0 : +num2[j]

        console.log(`digit1: ${digit1}, digit2: ${digit2}`)
        digitSum = digit1 + digit2 + carry
        sum = `${digitSum % 10}${sum}`
        carry = Math.floor(digitSum / 10)
    }
    
    return sum
};

console.log(addStrings(num1, num2));