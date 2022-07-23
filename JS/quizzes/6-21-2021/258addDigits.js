num = 38

var addDigits = function(num) {
    if(num < 10) return num
    
    
    
    return addDigits(num.toString().split("").reduce((a,c) => {
        return a + +c
    }, 0))
};

console.log(addDigits(num))