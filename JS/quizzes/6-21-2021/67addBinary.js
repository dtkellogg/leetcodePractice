a = "11", b = "1"

var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum
};

console.log(addBinary(a,b))