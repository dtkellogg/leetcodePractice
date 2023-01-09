// ---------- From String ---------- //

// ----- #1 Using Number ----- //

let quantity1 = '12'
quantity1 = Number(quantity1)
console.log(typeof quantity1)  // number


// ----- #2 parseFloat ----- //

const quantity2 = "12";
const quantity3 = "12.99";
const quantity4 = "   12.99    ";

console.log(parseInt(quantity2, 10));  // 12
console.log(parseInt(quantity3, 10));  // 12
console.log(parseInt(quantity4, 10));  // 12


// ----- #3 unary plus operator ----- //

const quantity5 = "12";
const quantity6 = "12.99";

console.log(typeof +quantity5);  // number
console.log(+quantity6);  // 12.99


// ----- #4 multiply by 1 ----- //

const quantity7 = "12";
const quantity8 = "12.99";

console.log(typeof (quantity7 * 1));  // number
console.log(quantity8 * 1);  // 12.99


// ----- #5 divide by 1 ----- //

const quantity9 = "12";
const quantity10 = "12.99";

console.log(typeof (quantity9 / 1));  // number
console.log(quantity10 / 1);  // 12.99


// ----- #6 subtract 0 ----- //

const quantity11 = "12";
const quantity12 = "12.99";

console.log(typeof (quantity11 - 0));  // number
console.log(quantity12 - 0);  // 12.99


// ----- #7 using the Math object ----- //

const quantity13 = "12";
const quantity14 = "12.99";
const quantity15 = "12.99";

console.log(Math.floor(quantity13));  // number
console.log(Math.ceil(quantity14));  // 13
console.log(Math.round(quantity15));  // 13