
"use strict";

// -------------------- String in JavaScript --------------------

const name = "Prathviraj";
const age = 19;

// console.log(name + age + " Engineer");        // Old way of combining strings

// Template literals (Modern way)
// ${} ka use karke variables ko string ke andar add kar sakte hain.
// Ye old syntax se jyada readable aur easy hai.

console.log(`Hello, my name is ${name} and my age is ${age}`);


// -------------------- String Declaration --------------------

const occupation = "Engineer";        // String ko normally aise declare karte hain.

const gameName = new String("prathviraj-chouhan");        // String constructor ka use karke bhi String bana sakte hain.


// -------------------- Accessing Characters --------------------

// String ke characters ko index number se access kar sakte hain.
// Index hamesha 0 se start hota hai.

console.log(gameName[0]);  // p

console.log(gameName.__proto__);          // String ka prototype check karne ke liye.


// -------------------- String Properties & Methods --------------------

console.log(occupation.length);  // 8                      // length => String mein total kitne characters hain.

console.log(occupation.toUpperCase());  // 'ENGINEER'          // toUpperCase() => Saare characters capital letters mein.

console.log(occupation.toLowerCase());  // 'engineer'          // toLowerCase() => Saare characters small letters mein.

console.log(occupation.charAt(2));  // 'g'               // charAt() => Given index par konsa character hai.

console.log(occupation.indexOf("i"));  // 3              // indexOf() => Character ya word ka index find karta hai

console.log(occupation.includes("gine"));  // true          // includes() => Check karta hai ki word present hai ya nahi.


// -------------------- substring() & slice() --------------------

const newString = gameName.substring(0, 4);          // substring() => String ka ek part return karta hai.
console.log(newString);  // 'prat'                   // Isme negative values ko 0 treat kiya jata hai.

const anotherString = gameName.slice(-8, -1);             // slice() => String ka ek part return karta hai.
console.log(anotherString);  // '-chouha'                 // Isme negative index bhi use kar sakte hain.


// -------------------- trim() Method --------------------

// trim() => Starting aur ending ke extra spaces remove karta hai, original string change nahi hoti.

const newStringOne = "   Prathviraj    ";

console.log(newStringOne);         // '    Prathviraj    '
console.log(newStringOne.trim());  // 'Prathviraj'


// -------------------- replace() Method --------------------

// replace() => String ke kisi word ya character ko replace karta hai.

const url = "https://prathviraj.com/prathviraj%20chouhan";

console.log(url.replace("%20", "-"));  // https://prathviraj.com/prathviraj-chouhan


// -------------------- split() Method --------------------

// split() => String ko given separator ke basis par array mein convert karta hai.

console.log(gameName.split("-"));  // [ 'prathviraj', 'chouhan' ]


// -------------------- More String Examples --------------------

// startsWith() => Check karta hai string kis word se start ho rahi hai.
console.log(gameName.startsWith("prathviraj"));  // true     (Kyunki string "prathviraj" se start ho rahi hai.)                      

// endsWith() => Check karta hai string kis word par end ho rahi hai.
console.log(gameName.endsWith("chouhan"));  // true     (Kyunki string "chouhan" par end ho rahi hai.)


