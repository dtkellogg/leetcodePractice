digits = [1,2,3]

var plusOne = function(digits) {
    let carry = 0
    
    for(let i = digits.length - 1; i > 0; i--) {
        if(digits[i] === 9) {
            digits[i] = 0
            carry++
        } else {
            digits[i] += 1
            return digits
        }
    }
};

console.log(plusOne(digits));