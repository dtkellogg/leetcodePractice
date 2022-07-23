num1 = "11", num2 = "123"

// this would work, but BigInt isn't rounding correctly
// var addStrings = function(num1, num2) {
//     return BigInt((parseInt(BigInt(num1)) + parseInt(BigInt(num2)))).toString()
// };


var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = '';
     
    for (;i >= 0 || j >= 0 || carry > 0;i--, j--) {
        const digit1 = i < 0 ? 0 : +num1.charAt(i);
        const digit2 = j < 0 ? 0 : +num2.charAt(j);
        const digitsSum = digit1 + digit2 + carry;
        sum = `${digitsSum % 10}${sum}`;  // divide by 10 so only take 1 digit
        carry = Math.floor(digitsSum / 10);

        console.log(`digit1: ${digit1}, digit2: ${digit2}`)
        console.log(`digitsSum: ${digitsSum}`)
        console.log(`carry: ${carry}`)
        console.log(`{digitsSum % 10}: ${digitsSum % 10}`)
        console.log(`{sum}: ${sum}`)
        
    }
    
    return sum;
};

console.log(addStrings(num1, num2));