digits = [1,2,3]

// var plusOne = function(digits) {
//     for (var i = digits.length - 1; i != -1; i--) {
//         if (digits[i] != 9) {
//             digits[i] += 1
//             return digits
//         }
        
//         digits[i] = 0
//     }
    
//     digits.unshift(1)
    
//     return digits
// };

var plusOne = function(digits) {
  for(let i = digits.length - 1; i >= 0; i --){
    if(digits[i] === 9){
      digits[i] = 0;
    }
    else {
      digits[i] ++;
      return digits;
    }
  }
  return [1, ...digits];
};

console.log(plusOne(digits))