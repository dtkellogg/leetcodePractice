arr = [988,641,984,635,461,527,491,610,274,104,348,468,220,837,126,111,536,368,89,201,589,481,849,708,258,853,563,868,92,76,566,398,272,697,584,851,302,766,88,428,276,797,460,244,950,134,838,161,15,330]

var maxNumberOfApples = function(arr) {
    let limit = 5000
    let weight = 0
    let count = 0
    
    arr.sort((a,b) => a - b)
    
    for(let i=0; i<arr.length; i++) {
        weight += arr[i]
        if(weight > limit) break
        count++
    }
    
    return count
};

console.log(maxNumberOfApples(arr))