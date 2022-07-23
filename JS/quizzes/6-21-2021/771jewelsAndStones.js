jewels = "aA", stones = "aAAbbbb"

var numJewelsInStones = function(jewels, stones) {
    return [...stones].filter((x) => jewels.indexOf(x) > -1).length
};

console.log(numJewelsInStones(jewels,stones))