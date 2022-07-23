n = 10


// var countPrimes = function(n) {
//     var isPrime = new Array(n);
//     for (var i = 2; i < n; i++) {
//       isPrime[i] = true;
//    }
//    for (var i = 2; i * i < n; i++) {
//           if (!isPrime[i]) continue;
//           for (var j = i * i; j < n; j += i) {
//              isPrime[j] = false;
//           }
//        }
//    var count = 0;
//    for (var i = 2; i < n; i++) {
//         if (isPrime[i]) count++;
//     }
//    return count;
// };

////////////////////////////////////////////////////////////////////////
// 🔥🔥🔥
var countPrimes = function(n) {
    let flagArray = [],
    result = 0;
    for(let i = 2; i < n; i++){
        if(flagArray[i] === undefined){
            // is Primes
            flagArray[i] = 1;
            result++;
            // rm it's multiples
            let j = 2;
            while(i * j < n){
                flagArray[i * j] = 0;
                j++;
            }
        }
    }
    return result;
};

console.log(countPrimes(n))