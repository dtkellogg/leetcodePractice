arr = [100,200,150,1000]

// var maxNumberOfApples = function(arr) {
//     count = 0
//     weightRemaining = 5000
    
//     arr.sort((a,b) => a - b).map(a => {
//         if((weightRemaining - a) >= 0) {
//             count++
//             weightRemaining -= a
//         }
//     })
    
//     return count
// };


// better answer because breaks when no more apples can fit
function maxNumberOfApples(arr) {
  let limit = 5000;
  let total = 0;
  let count = 0;

  let sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    total += sorted[i];

    if (total <= limit) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

console.log(maxNumberOfApples(arr))