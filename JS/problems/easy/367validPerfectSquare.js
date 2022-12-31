num = 15


// 🔥🔥🔥
var isPerfectSquare = function(num) {
    var sum = 0;
    for(let i = 1; i <= num; i += 2){
        sum += i;
        if(sum === num){
            return true;
        }
    }
    return false;
};

////////////////////////////////////////////////////////////////
// dynamic programming:
// var isPerfectSquare = function(num) {
//   if(num === 1) return true;
//   var add = 3;
//   var curr = 1;
//   while(curr < num) {
//   	curr += add;
//   	add +=2;
//   }
//   return curr === num;
// };    


// my version:
// note: this way actually appears faster
// var isPerfectSquare = function(num) {
//     return Math.sqrt(num) === Math.floor(Math.sqrt(num))
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(isPerfectSquare(num))