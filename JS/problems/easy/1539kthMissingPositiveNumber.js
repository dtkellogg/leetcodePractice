arr = [2,3,4,7,11], k = 5

// Using set

let findKthPositive = (A, K) => {
    let seen = new Set(A);
    for (let i = 1;; ++i)
        if (!seen.has(i) && !--K)
            return i;
}

////////////////////////////////////////////////////////////////////////////////////////////////
// Another approach:

// var findKthPositive = function(arr, k) {
//   let miss = 1;
//   let r = [];
//   let i = 0;
//   while (r.length < k) {
//     if (miss === arr[i]) i += 1;
//     else r.push(miss);
//     miss += 1;
//   }
//   return r[k - 1];
// };


////////////////////////////////
// var findKthPositive = function(arr, k) {
//     let prev = 0;
    
//     for(let i = 0; i < arr.length; i++) {
//         const diff = arr[i] - prev - 1;

//         console.log(`i: ${i}, k: ${k}, diff: ${diff}, prev: ${prev}`)
//         if(k > diff) k -= diff;
//         else return prev + k;
//         prev = arr[i];
//     }
//     // return prev + k     
// };


////////////////////////////////////////////////////////////////
// my approach (it doesn't work..'):
// var findKthPositive = () => {
//     let count = 0,
//         len = arr.length + k 

//     for(let i = 1; i < arr[arr.length - 1]; i++) {

//         console.log(`count: ${count}, i: ${i}, arr.indexOf(i): ${arr.indexOf(i)}`);

//         if(arr.indexOf(i) < 0) {
//              count += 1
//              console.log("saoiOISN")
//         }
//         if(count === 5) return i
//     }
// }


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(findKthPositive(arr, k))