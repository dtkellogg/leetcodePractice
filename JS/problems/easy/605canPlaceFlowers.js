flowerbed = [1,0,0,0,1], n = 1
flowerbed = [1,0,0,0,0,1], n = 2
flowerbed = [0,0,1,0,1], n = 1
flowerbed = [1,0,0,0,1,0,0], n = 2
flowerbed = [1,0,0,0,0,1], n = 2
flowerbed = [0,0,1,0,0], n = 1


// i like this one:
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0
  
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      count++
      flowerbed[i] = 1
    }
  }

  return count >= n
};

// var canPlaceFlowers = function(flowerbed, n) {
//     let current = 0; const size = flowerbed.length;
// 	for(var i = 0; i <= size; i++) {
// 		if (i < size && flowerbed[i] == 0) {
// 			current++;
// 			if (i == 0) current++;
// 			if (i == size - 1) current++;
// 		} else {
// 			n -= Math.trunc((current - 1) / 2);
// 			if (n <= 0) return true;
// 			current = 0;
// 		}
// 	}
// 	return false;
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(canPlaceFlowers(flowerbed, n))