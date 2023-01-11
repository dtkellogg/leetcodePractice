// Notes from: https://medium.com/nmc-techblog/advanced-console-log-tips-tricks-fa3762930bca

const person = {name: 'Toshi', age: '30', favFood: 'burrito', pets: ['boo', 'fred', 'poncho']}

// #1 - All options - //
console.log(console)

// #2 - General - //
// console.log(person)

// #3 - Drop down format - //
// console.dir(person)

// #4 - Table format - //
// console.table(person)

// #5 - Start a timer - //
console.time()

// #6 - Log time since timer started - //
console.timeLog()
console.timeLog()

// #7 - End timer and log total time - //
console.timeEnd()

// All three time consoles put together
console.time()
console.timeLog()
console.timeEnd()

// #8 - Only log if condition fails - //
console.assert(person.pets.find((p) => p === 'Bob'), 'Person does not have a pet named Bob')

// #8 - Add CSS - //
console.log('%c I am a logging master', 'font-weight: bold; background: red; padding: 15px')

// #10 -
console.warn("This is a warning!")