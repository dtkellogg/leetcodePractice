num = 38

var addDigits = function(num) {
    if(num < 10) return num

    console.log(num)
    
    const sum = num.toString().split("").reduce((a,c) => {
        return a + +c
    }, 0)
    
    return (
        addDigits(sum)
    )
};

console.log(addDigits(num))