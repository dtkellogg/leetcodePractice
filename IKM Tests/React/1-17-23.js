// ---------- #17 ---------- //
console.log('// ---------- #17 ---------- //')

const greet = () => {
  var msg = ['Hello', this.name, 'welcome to ', this.location].join(' ')
  console.log(msg)
}

const person = {name: 'Jane Doe', location: 'Springfield'}
console.log(greet.call(this.person))