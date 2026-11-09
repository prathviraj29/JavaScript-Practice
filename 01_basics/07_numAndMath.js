
//  Number Declaration - - - - - 

const score = 400;
console.log(score);

const balance = new Number(200);
console.log(balance);


console.log(balance.toString().length);  // 3          // Pehle string me convert karega, fir uski length batayega


console.log(balance.toFixed(2));  // 200.00          // Decimal ke baad 2 digits show karega 

const otherNumber = 123.659;

console.log(otherNumber.toPrecision(4));          // Total 4 important digits rakhega, Next digit 5 se chhota ho to same rahega, Next digit 5 ya usse bada ho to round up karega

const price = 1000000;

console.log(price.toLocaleString());                   // US format me commas lagayega jisse numbers easily readable ho
console.log(price.toLocaleString("en-IN"));            // Indian format me commas lagayega (10,00,000)


// - - - - - - - - - - Math :- - - - - - - - - -

// Math JavaScript ka built-in object hai, isme mathematical calculations ke ready-made methods hote hain

console.log(Math);

// Rounding Methods - - - - - - - - 

console.log(Math.round(4.6));  // 5          // Nearest integer dega 
console.log(Math.floor(4.8));  // 4          // Neeche wala integer dega 
console.log(Math.ceil(4.2));   // 5          // Upar wala integer dega 


// Maximum and Minimum - - - - - - -

console.log(Math.max(11, 9, 18, 13, 6));  // 18          // Sabse bada number dega
console.log(Math.min(11, 9, 18, 13, 6));  // 6           // Sabse chhota number dega


// Other Mathematical Methods - - - - - 

console.log(Math.abs(-10));   // 10          // Negative value ko positive bana dega
console.log(Math.pow(2, 3));  // 8           // 2 ki power 3 calculate karega
console.log(Math.sqrt(25));   // 5           // Square root dega


// Random Number - - - - - - - - - - 

console.log(Math.random());  // 0.83189                         // 0 se 1 ke beech random decimal deta hai, 0 aa sakta hai lekin 1 kabhi nahi aata

console.log(Math.random() * 10);   // 7.08746                   // 0 se 10 ke beech decimal dega, ex:- 0.23 * 10 = 2.3

console.log(Math.floor(Math.random() * 10) + 1);  // 7          // 1 se 10 tak random integer dega


// Random Number Between Any Range - - - - - - 

const min = 10;
const max = 20;

// Formula:-  Math.floor(Math.random() * (max - min + 1)) + min

console.log(
    Math.floor(Math.random() * (max - min + 1)) + min
);

// 10 se 20 ke beech koi bhi random integer milega,  max - min + 1 karne se maximum value bhi include ho jaati hai
