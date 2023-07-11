prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
  let result = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    result = Math.max(result, prices[i] - min);
  }
  return result;
};

// var maxProfit = function(prices) {
//     var min = Number.MAX_SAFE_INTEGER; 
//     var max = 0;
//     for (var i = 0; i < prices.length; i++) {
//         min = Math.min(min, prices[i]);
//         max = Math.max(max, prices[i] - min);
//     }
//     return max;
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var maxProfit = function(prices) {
}

console.log(maxProfit(prices))

// why use MAX_SAFE_INTEGER:
// it's a lot more safe to follow this method rather than inputting an extremely 
// large number because there is always the edge case where the array has a larger number 
// than the large value you explicitly assigned to min, in which case the min value will 
// never change. Therefore, we need to make sure that the min value is able to change by 
// incorporating the default safest large number we can assign towards min.