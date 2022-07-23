Y = 1992, M = 7

var numberOfDays = function(Y, M) {
    return new Date(Y, M, 0).getDate();
};

console.log(numberOfDays(Y, M))