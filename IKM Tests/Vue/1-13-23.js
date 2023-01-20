// ---------- #17 ---------- //
console.log('// ---------- #17 ---------- //')

// person = name => first + ' ' + last
// console.log(person ('jane', 'smith'))

// ---------- # 33 ---------- //
console.log('\n\n// ---------- #33 ---------- //')

var a = Array.from('abracadabra')
var items = a.entries()
var count = 0

for(let i of items) {
  // console.log(i)

  // #2 - This option below doesn't work:
  if(i[0].value === 'b') {
    count++
  }

  // #3 - This option below doesn't work:
  // console.log(i.hasValue)
  // if(i.hasValue && i.value === 'b') {
  //   count++
  // }


  // #5 - This option below doesn't work:
  // if(items.value() === 'b') {
  //   count++;
  // }
}

// return count


// ---------- # 36 ---------- //
console.log('\n\n// ---------- #36 ---------- //')

var calc2 = (z) => z * 10

var calc1 = (x,y) => {
  return (x * y) + calc2(x)
}


// Possible answers:
console.log(calc1(2,3))  // 26
console.log(calc1.call(this,2,3))  // 26
console.log(calc1.call(2,3))  // NaN
var values = [2,3]
console.log(calc1.apply(values))  // NaN
console.log(calc1.apply(this,values))  // 26