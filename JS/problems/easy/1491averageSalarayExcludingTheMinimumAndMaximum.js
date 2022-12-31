salary = [4000,3000,1000,2000]  // Output: 2500.00000



// O(n) O(1)
var average = function(salary) {
    if(salary.length < 3) return 0
    let min = salary[0],max = salary[0],sum=0
    
    for(let ele of salary){
        if(ele > max) max = ele
        if(ele < min) min = ele
        sum += ele
    }
    return (sum - max - min)/(salary.length-2)
};

////////////////////////////////
// my code:
// var average = function(salary) {
//     let desired = salary.sort((a, b) => a - b).slice(1, -1)
//     return desired.reduce((a,c) => a + c, 0 ) / desired.length
// };


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(average(salary))