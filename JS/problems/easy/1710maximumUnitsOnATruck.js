boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10

// Since we don't need to think about the size of different box types, it's a simple greedy strategy for only units of boxes.

// SOLUTION 1
// We use the build-in sort method for an array to sort the boxTypes. And try to choose the boxes with more units.

// const maximumUnits = (boxTypes, truckSize) => {
//   let ret = 0;
//   boxTypes.sort((a, b) => b[1] - a[1]);
//   for (let idx = 0; ; ) {
//     if (idx >= boxTypes.length) break;
//     const [count, unit] = boxTypes[idx];
//     if (count === 0) { ++idx; continue; }
//     if (truckSize <= count) { ret += truckSize * unit; break; }
//     truckSize -= count;
//     ret += count * unit;
//     ++idx;
//   }
//   return ret;
// };

// SOLUTION 2
// We use bucket sort to make the sorting part O(n). There's a little optimization, traversal from the max should be better than the edge of bucket.

const maximumUnits = (boxTypes, truckSize) => {
  const bucket = new Uint16Array(1001);
  let ret = 0;
  let max = 0;
  for (let i = 0; i < boxTypes.length; ++i) {
    bucket[boxTypes[i][1]] += boxTypes[i][0];
	boxTypes[i][1] > max && (max = boxTypes[i][1]);
  }
  for (let idx = max; ; ) {
    if (idx < 0) break;
    const count = bucket[idx];
    if (count === 0) { --idx; continue; }
    if (truckSize <= count) { ret += truckSize * idx; break; }
    truckSize -= count;
    ret += count * idx;
    --idx;
  }
  return ret;
};

////////////////////////////////
// My solution.... this is not efficient - 5%... :( 
// var maximumUnits = function(boxTypes, truckSize) {
//     let units = []

//     boxTypes.map((unit) => {
//         const [numOfBoxes, unitsPerBox] = unit

//         for(let i = 0; i < numOfBoxes; i++) {
//             units.push(unitsPerBox)
//         }
//     })
    
//     const unitsToCarry = units.sort((a,b) => b - a).slice(0, truckSize)
//     const massToCarry = unitsToCarry.reduce((a, c) => a + c, 0)
    
//     return massToCarry
// };

console.log(maximumUnits(boxTypes, truckSize))