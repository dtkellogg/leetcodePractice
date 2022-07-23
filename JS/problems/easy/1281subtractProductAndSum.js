n = 23

// good solution to use / know:
const subtractProductAndSum = n => {
  let sum = 0;
  let prod = 1;
  while (n > 0) {
    const mod = n % 10;
    sum += mod;
    prod *= mod;
    n = Math.floor(n / 10);
  }
  return prod - sum;
};

////////////////////////////////////////////////////////////////
// using reduce:
// var subtractProductAndSum = function(n) {
//     const digits = [...n.toString()]
    
//     const sum = digits.reduce((a,c) => a + +c, 0)
//     const product = digits.reduce((a,c) => a * c, 1)
    
//     return product - sum
// };

console.log(subtractProductAndSum(n))