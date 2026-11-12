
// - - - - - COMBINING TWO ARRAYS - - - - - - - - - - 

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// - - - - - push() METHOD - - - - - 

marvel_heros.push(dc_heros);          // ek array ko doosre array ke end mein add karta hai, Lekin poora array ek single element ki tarah add hota hai.

console.log(marvel_heros);                    // ["thor", "ironman", "spiderman",["superman", "flash", "batman"]]

console.log(marvel_heros[3][1]);  // flash          // Nested array ke andar value access karna.
                                                    // [3] = Fourth element (DC array) 
                                                    // [1] = DC array ka second element (flash)


// - - - - - concat() METHOD - - - - - - - - - -

const allHeros = marvel_heros.concat(dc_heros);     // concat() do ya zyada arrays ko combine karke ek new array return karta hai, original arrays ko change nahi karta.

console.log(allHeros);  // ["thor", "ironman", "spiderman", "superman", "flash", "batman"]


// - - - - - SPREAD (...) OPERATOR - - - - - - - - - -

const all_new_heros = [...marvel_heros, ...dc_heros];     // Spread operator (...) array ki values ko spread karta hai, isse multiple arrays ko easily combine kar sakte hain.

console.log(all_new_heros);


// - - - - - flat() METHOD - - - - - - - - - -

// Nested Array ka matlab hota hai array ke andar array.

const another_array = [ 1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ];

// flat() nested arrays ko ek single array mein convert karta hai, infinity ka matlab hai saare nested levels ko flatten karna.

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);  // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// - - - - - Array.isArray() - - - - - - - - - - 

console.log(Array.isArray("Prathviraj"));  // false          // Check karta hai ki di hui value array hai ya nahi.

console.log(Array.isArray([1, 2, 3]));  // true


// - - - - - Array.from() - - - - - - - - - - 

// Array.from() iterable ya array-like value ko ek new array mein convert karta hai, or String ke har character ko alag array element banata hai.

console.log(Array.from("Prathviraj"));  // ["P", "r", "a", "t", "h", "v", "i", "r", "a", "j"]


// - - - - - Array.of() - - - - - - - - - - 

// Array.of() di hui individual values ko ek new array mein convert karta hai.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // [100, 200, 300]

