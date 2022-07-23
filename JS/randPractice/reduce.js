arr = [0, 1, 2, 3, 4]


const reduce = arr => {

    return arr.reduce((accumulator, currentValue, currentIndex, array) => {
        console.log(`currentValue: ${currentValue}, accumulator: ${accumulator}`)
        console.log("---------------")

        return accumulator + currentValue
    }, 10)
}


console.log(reduce(arr))