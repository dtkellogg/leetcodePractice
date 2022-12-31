jewels = "aA", stones = "aAAbbbb"

// this doesn't work....:
// var numJewelsInStones = function(jewels, stones) {
//     const regex = new RegExp(jewels, 'i');
//     return stones.match(regex)
// }

// this works
var numJewelsInStones = function(jewels, stones) {
    // console.log([...stones])
   return [...stones].filter((char) => jewels.indexOf(char) > -1 ).length
//    return [...stones].filter((char) => jewels.indexOf(char) !== -1 ).length  // this also works
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(numJewelsInStones(jewels, stones))