prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    let min = prices[0]
    let result = 0
    
    for(let i=1; i<prices.length; i++) {
        min = Math.min(min, prices[i])
        result = Math.max(result, prices[i] - min)
        
    }

    return result
};

console.log(maxProfit(prices))