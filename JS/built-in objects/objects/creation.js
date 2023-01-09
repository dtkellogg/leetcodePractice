// ---------- From other data types ---------- //

// ----- From Map ----- //

const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj1 = Object.fromEntries(map);
console.log(obj1); // { foo: "bar", baz: 42 }

// ----- From Array ----- //

const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj2 = Object.fromEntries(arr);
console.log(obj2); // { 0: "a", 1: "b", 2: "c" }

