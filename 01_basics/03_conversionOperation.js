
// - - - - - - - - - Type Conversion - - - - - - - - -

let score = "suraj";

console.log(typeof score);           // typeof se variable ka datatype check kar sakte hain
console.log(typeof (score));  // string

let valueInNumber = Number(score);          // Number() kisi value ko Number datatype mein convert karta hai

console.log(typeof valueInNumber);
console.log(valueInNumber);  // NaN (Not a Number)


// Type Conversion ke kuch examples:

console.log(Number("33"));     // 33 (String se Number)
console.log(Number("33abc"));  // NaN (Valid number nahi hai)
console.log(Number(true));     // 1
console.log(Number(false));    // 0


// - - - - - - - - - Boolean Conversion - - - - - - - - -

let isLoggedIn = "rahul";

let booleanIsLoggedIn = Boolean(isLoggedIn);        // Boolean() kisi value ko true ya false mein convert karta hai

console.log(booleanIsLoggedIn);  // true


// Boolean Conversion ke examples:

console.log(Boolean(1));         // true
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false (Empty string)
console.log(Boolean("ujjwal"));  // true (Non-empty string)


// - - - - - - - - - String Conversion - - - - - - - - -

let someNumber = 7;

let stringNumber = String(someNumber);       // String() kisi value ko String datatype mein convert karta hai

console.log(stringNumber);  // '7'
console.log(typeof stringNumber);  // string


// - - - - - - - - - Operations - - - - - - - - -

let value = 3;

let negValue = -value;          // Unary minus (-) se number negative ho jata hai

console.log(negValue);  // -3


// - - - - - - - - - Arithmetic Operations - - - - - - - - -

// Addition
console.log(2 + 2);  // 4

// Subtraction
console.log(2 - 2);  // 0

// Multiplication
console.log(2 * 2);  // 4

// Exponentiation (Power)
console.log(2 ** 3);  // 8

// Division
console.log(2 / 3);  // 0.6666666666666666

// Modulus (Remainder)
console.log(2 % 3);  // 2


// - - - - - - - - - String Concatenation - - - - - - - - -

let str1 = "hello";
let str2 = " mohan";

let str3 = str1 + str2;          // + operator se dono strings ko bhi jod sakte hain

console.log(str3);  // hello mohan

// Jab String aur Number ko + se jodte hain, toh JavaScript String Concatenation kar sakta hai.

console.log("1" + 2);      // "12"
console.log(1 + "2");      // "12"
console.log("1" + 2 + 2);  // "122"
console.log(1 + 2 + "2");  // "32"

console.log((3 + 4) * 5 % 3);          // Parentheses ki wajah se pehle (3 + 4) calculate hoga


// - - - - - - - - - Unary Plus Operator - - - - - - - - -

console.log(+true);  // 1 (Unary + value ko Number mein convert karne ki koshish karta hai)
console.log(+"");    // 0


// - - - - - - - - - Chained Assignment - - - - - - - - -

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;         // Ek hi expression se teeno variables ko same value assign kar rahe hain

console.log(num1, num2, num3);  // 4 4 4


// - - - - - - - - - Increment Operator - - - - - - - - -

let gameCounter = 100;

++gameCounter;       // ++ operator value ko 1 se increase karta hai

console.log(gameCounter);  // 101

