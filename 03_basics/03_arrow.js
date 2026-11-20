
// - - - - - ARROW FUNCTION - - - - - - - - - - 

// Arrow Function JavaScript mein function likhne ka modern aur shorter syntax hai

function greet() {                        // Normal Function
    console.log("Hello World!");
}

greet();


const sayHello = () => {                  // Arrow Function
    console.log("Hello World!");
};

sayHello();                               // Dono functions ka kaam same hai.


// - - - - - ARROW FUNCTION WITH PARAMETERS - - - - - - - - - - 

const add = (a, b) => {          // Arrow Function mein bhi parameters pass kar sakte hain.
    return a + b;
};

console.log(add(10, 20));  // 30

//  - - - - - - - - - - Agar sirf ek parameter ho toh parentheses () optional hain.

const square = num => {
    return num * num;
};

console.log(square(5));   // 25


// - - - - - IMPLICIT RETURN - - - - - - - - - - 

// Agar Arrow Function mein sirf ek expression return karna hai, toh curly braces {} aur return keyword hata sakte hain.

const multiply = (a, b) => {          // Explicit Return
    return a * b;
};


const multiplyShort = (a, b) => a * b;          // Implicit Return

console.log(multiply(5, 4));       // 20
console.log(multiplyShort(5, 4));  // 20

// - - - - - - - - - - Object return karte waqt parentheses () use karte hain.

const getUser = () => ({
    username: "k d pathak",
    age: 30,
    course: "LLB"
});

console.log(getUser());          // { username: 'k d pathak', age: 30, course: 'LLB' }


// - - - - - DEFAULT PARAMETERS - - - - - - - - - - 

// Agar function call karte time argument pass nahi hota, toh default parameter ki value use hoti hai.

const welcome = (username = "guest") => {
    console.log(`Welcome ${username}`);
};

welcome("sujit");  // Welcome sujit          // print sujit kyuki argument pass ho raha hai
welcome();         // Welcome Guest          // print guest kyuki argument pass nahi ho raha hai


// - - - - - REST PARAMETERS - - - - - - - - - - 

const calculateTotal = (...numbers) => {          // Rest Parameter (...) multiple arguments ko ek single array mein collect karta hai.

    console.log(numbers);
};

calculateTotal(10, 20, 30);     // [10, 20, 30]
calculateTotal(5, 10, 15, 20);  // [5, 10, 15, 20]


// - - - - - CALLBACK FUNCTION - - - - - - - - - - 

// Jab ek function ko doosre function mein argument ke roop mein pass karte hain, toh use Callback Function kehte hain.

function greet () {                // Greet naam ka function declare kiya
    console.log("hello");
}

function execute (callback) {          // Execute function ek callback parameter accept karta hai
    callback();                        // Callback function ko call (execute) kar rahe hain
}

execute(greet);          // Greet function ko argument ke roop mein pass kiya


// - - - - - HIGHER-ORDER FUNCTION - - - - - - - - - - 

// Higher-Order Function woh function hota hai jo kisi doosre function ko argument ke roop mein accept kare ya function return kare.

function sayHello () {               // sayHello naam ka function declare kiya
    console.log("hiiiiii");
}

function runFunction (myFunction) {          // runFunction ek Higher-Order Function hai, // Kyunki ye ek doosre function ko parameter ke roop mein accept karta hai
    myFunction();                            // Passed function ko execute kar rahe hain
}

runFunction(sayHello);          // sayHello function ko argument ke roop mein pass kiya


// - - - - - PURE FUNCTION - - - - - - - - - - 

// - Same input par hamesha same output deta hai.
// - Bahar ki kisi value ko modify nahi karta.

const pureAdd = (a, b) => {
    return a + b;
};

console.log(pureAdd(10, 20));  // 30
console.log(pureAdd(10, 20));  // 30


// - - - - - IMPURE FUNCTION - - - - - - - - - - 

// Impure Function bahar ki value ko modify kar sakta hai ya external state par depend kar sakta hai.

let total = 0;

const impureAdd = (value) => {
    total += value;
    return total;
};

console.log(impureAdd(10));  // 10
console.log(impureAdd(20));  // 30

