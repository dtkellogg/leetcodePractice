prices = [7,1,5,3,6,4]

// var maxProfit = function(prices) {
//     let count = 0
    
//     for(let i = 1; i < prices.length; i++) {
//         let diff = prices[i] - prices[i - 1]
//         if (diff > 0) count += diff
//     }
    
//     return count
// };


var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        let prev = prices[i - 1];
        let current = prices[i];

        if (prev < current) {
            profit += current - prev;
        }
    }
    
    return profit;
};




// const maxProfit = prices => {
//   // Start with nothing and take every profitable opportunity from time travel
//   let profit = 0;
//   // Start from the second day (because that is the first day you could sell)
//   for (let i = 1; i < prices.length; i++) {
//     // Our Delorean only goes back 1 day, but that is all we need
//     const [priceYesterday, priceToday] = [prices[i - 1], prices[i]];
//     // Whenever there is profit, engage that Flux Capacitor!
//     if (priceYesterday < priceToday) profit += priceToday - priceYesterday;
//     // Buy yesterday; sell today
//   }
//   // Take every Monday off!
//   return profit;
//   // Time travel trading makes every weekend is a three-day weekend!
// };

console.log(maxProfit(prices))