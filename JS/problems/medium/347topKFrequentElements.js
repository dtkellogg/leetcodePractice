nums = [1,1,1,2,2,3], k = 2  // Output: [1,2]
nums = [1], k = 1  // Output: [1]


var topKFrequent = function(nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];
  
  for(let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  for(let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  
  for(let i = bucket.length-1; i >= 0; i--) {
    if(bucket[i]) result.push(...bucket[i]);
    if(result.length === k) break;
  }
  return result;
};