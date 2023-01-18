// ---------- # 8 ---------- //
console.log('// ---------- #8 ---------- //')

// console.log(calc(2,2))
// var calc = (n1,n2) => {
//   return n1 + n2
// }

// var calc = (n1,n2) => n1 + n2
// console.log(calc(2,2))

// var calc = (n1, n2) => {
//   return n1 + n2
// }
// console.log(calc(2,2))

var calc = ((n1,n2) => {
  var calc = (n1 + n2)
  return calc
})(2,2)

console.log(calc)

// ---------- # 17 ---------- //
console.log('\n\n// ---------- #17 ---------- //')
var func1 = () => {prop1: '1' + '1'}
var obj1 = func1()
console.log(obj1)


// ---------- # 24 ---------- //
console.log('\n\n// ---------- #24 ---------- //')

var data = [0,3,0]
// var data = [[1,2,3,[4,[5,6,14]]], [8,[9,18,[11,[12]],13]]]  // 18

function test(data,ele) {
  console.log('ele: ', ele)
  if(typeof data == "number") {
    return (!ele || data > ele) ? data : ele
  } else {
    for (var i = 0; i < data.length; i++) {
      ele = test(data[i], ele)
    }
    return ele
  }
}
var result = test(data)
console.log('result: ', result)
console.log('data.length: ', data.length)


// ---------- #31 ---------- //
console.log('\n\n// ---------- #31 ---------- //')

// var a = [99,87,3,9,928374]
var a = [99,87,,9,928374]

a.find(function(value, index) {
  console.log('value: ', value)
  console.log('index: ', index)
  if(index == 2) {
    delete a[2]
  }
  console.log('a', a)
  console.log(index)
})
