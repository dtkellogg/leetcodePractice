candidates = [2,3,6,7], target = 7  // Output: [[2,2,3],[7]]

// function combinationSum(candidates, target) {
//   var buffer = [];
//   var result = [];
//   search(0, target);
//   return result;

//   function search(startIdx, target) {
//     if (target === 0) return result.push(buffer.slice());
//     if (target < 0) return;
//     if (startIdx === candidates.length) return;
//     buffer.push(candidates[startIdx]);
//     search(startIdx, target - candidates[startIdx]);
//     buffer.pop();
//     search(startIdx + 1, target);
//   }
// }


////////////////////////////////////////////////////////////////
// same as above, but w/o comments

function combinationSum(candidates, target) {
  var buffer = [];
  var result = [];
  search(0, target);
  return result;

  function search(startIdx, target) {
    console.log(`startIdx: ${startIdx}, target: ${target}`);
    console.log(`buffer:`)
    console.log(buffer)
    console.log("result:")
    console.log(result)


    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (startIdx === candidates.length) return;
    buffer.push(candidates[startIdx]);
    search(startIdx, target - candidates[startIdx]);
    buffer.pop();
    search(startIdx + 1, target);


    console.log("--------------------")
  }
}




////////////////////////////////////////////////////////////////
// Practice

function combinationSum(candidates, target) {
}

console.log(combinationSum(candidates, target));