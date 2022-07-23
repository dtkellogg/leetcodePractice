matrix = [[1,2,3],[4,5,6],[7,8,9]] // Output: [1,2,3,6,9,8,7,4,5]

var spiralOrder = function(matrix) {
  const res = []
  while(matrix.length){
    const first = matrix.shift()
    res.push(...first)
    for(const m of matrix){

      console.log("res:")
      console.log(res)
      
      console.log("m:")
      console.log(m)

      let val = m.pop()
      if(val)

        console.log(`value: ${val}`)

        res.push(val)
        m.reverse() 

        console.log("res:")
        console.log(res)
        console.log("--------------------------------")

    }

    console.log("Matrix:")
    console.log(matrix)

    matrix.reverse()

    console.log("Matrix Reversed:")
    console.log(matrix)
  }
  return res
};




////////////////////////////////////////////////////////////////
// same algorithm as above, but w/o comments

// var spiralOrder = function(matrix) {
//   const res = []
//   while(matrix.length){
//     const first = matrix.shift()
//     res.push(...first)
//     for(const m of matrix){
//       let val = m.pop()
//       if(val)
//         res.push(val)
//         m.reverse()   
//     }
//     matrix.reverse()
//   }
//   return res
// };


////////////////////////////////////////////////////////////////
// Practice

// var spiralOrder = (matrix) => {
//   let res = [];
//   while(matrix.length) {
//     let first = matrix.shift()
//     res.push(...first);
//     for(let m of matrix) {
//       const val = m.pop();
//       if (val) {
//         res.push(val);
//         m.reverse();
//       }
//     }
//     matrix.reverse();
//   }
//   return res
// }

console.log(spiralOrder(matrix))