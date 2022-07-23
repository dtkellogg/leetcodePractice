arr = [17,18,5,4,6,1]  // Output: [18,6,6,6,1,-1]

function replaceElements(arr) {
  let max = -1;
  
  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = arr[i];
    arr[i] = max;
    max = Math.max(max, curr);
  }
  
  return arr;
}


////////////////////////////////////////////////////////////////
// this also works, but it doesn't modify in place so its space is O(n)
const replaceElements = arr => {
    const result = new Array(arr.length);
    result[arr.length - 1] = -1;
    
    for (let i = arr.length - 1; i > 0; i -= 1) {
        result[i - 1] = Math.max(arr[i], result[i]);
    }
    
    return result;
};

console.log(replaceElements(arr))