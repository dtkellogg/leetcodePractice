candidates = [2,3,6,7], target = 7  // Output: [[2,2,3],[7]]

function combinationSum(candidates, target) {
  var buffer = [];
  var result = [];
  search(0, target);
  return result;

  function search(startIdx, target) {
    
    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (startIdx === candidates.length) return;
    buffer.push(candidates[startIdx]);
    search(startIdx, target - candidates[startIdx]);
    
    console.log(startIdx, target, buffer, result)
    console.log('GOING TO POP')

    buffer.pop();
    search(startIdx + 1, target);
  }
}

console.log(combinationSum(candidates, target));