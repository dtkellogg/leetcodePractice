// x = 2.00000, n = 10  // Output: 1024.00000
x = 2.00000, n = 4  // Output: 16
// x = 2.00000, n = -2  // 0.25

var myPow = function(x, n) {
    console.log(`x: ${x}, n: ${n}`)

    if (n===0) return 1;
    let pow = Math.abs(n);
	  let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;

    console.log(`x: ${x}, n: ${n}, result: ${result}`);
    console.log("--------------------------------")
    
    return n < 0 ? 1/result : result;
};

////////////////////////////////////////////////////////////////////////////////
// 🔥🔥🔥 same as above, but w/o comments

// var myPow = function(x, n) {
//     if (n===0) return 1;
    
//     let pow = Math.abs(n);
    
// 	let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;

//     return n < 0 ? 1/result : result;
// };


////////////////////////////////////////////////////////////////////////
// PRACTICE

// var myPow = function(x, n) {
// }

console.log(myPow(x,n))