// ---------- From another class ---------- //

class Car1 {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car1 {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar1 = new Model("Ford", "Mustang");

console.log(myCar1.show())


// ----- Getters and setters ----- //

class Car2 {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar2 = new Car2("Ford");

console.log(myCar2.cnam)

// --- If the name of the getters/setters are the same as the properties --- //

class Car3 {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar = new Car3("Ford");


// ----- Hoisting ----- //

// Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

// That means that you must declare a class before you can use it: