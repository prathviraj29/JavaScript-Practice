
// - - - - - TRUTHY AND FALSY VALUES - - - - - - - - - - 

// javaScript mein har value ko condition ke andar true ya false ki tarah evaluate kiya jata hai.


// - - - - - Truthy Values - - - - - - - - - - 

// truthy values wo hoti hain jo condition mein true behave karti hain.

// kuch common truthy values: "0" , "false" , " " , [] , {} , function(){}

const userEmail = "user@gmail.com"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}


// - - - - - Falsy Values - - - - - - - - - - 

// falsy values wo hoti hain jo condition mein false behave karti hain.

// common falsy values: false , 0 , -0 , 0n , "" , null , undefined , NaN

const userName = ""

if (userName) {
    console.log("username is available");
} else {
    console.log("username is empty");
}


// - - - - - Empty Array Check - - - - - - - - - - 

// empty array bhi truthy hota hai, Isliye if(array) se empty array check nahi kar sakte.

const myArray = []

if (myArray.length === 0) {
    console.log("array is empty");
} else {
    console.log("array has elements");
}


// - - - - - Empty Object Check - - - - - - - - - - 

// empty object bhi truthy hota hai, Object.keys() object ki saari keys ka array return karta hai.

const myObject = {}

if (Object.keys(myObject).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}


// - - - - - Nullish Coalescing Operator (??) - - - - - - - - 

// ?? operator tab right-side value return karta hai jab left-side value null ya undefined ho.

let val1

val1 = null ?? 10

console.log(val1);  // 10

val1 = undefined ?? 20

console.log(val1);  // 20

val1 = 5 ?? 10

console.log(val1);  // 5

val1 = null ?? undefined ?? 30 ?? 40          // multiple values ke saath bhi use kar sakte hain

console.log(val1);  // 30


// - - - - - Logical OR (||) vs Nullish (??) - - - - - - - - 

// || operator falsy value milne par right-side value return karta hai.
// ?? operator sirf null aur undefined par right-side value return karta hai.

const value1 = 0 || 10
const value2 = 0 ?? 10

console.log(value1);  // 10
console.log(value2);  // 0

// Ek aur example:

const value3 = "" || "default name"
const value4 = "" ?? "default name"

console.log(value3);  // default Name
console.log(value4);  // ""

 

