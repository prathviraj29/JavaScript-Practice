
// - - - - - FUNCTION DECLARATION - - - - - - - - - - 

function greet() {                        // Function Declaration ka matlab function ko define karna, function ke andar hum apna reusable code likhte hain.
    console.log("Hello prathviraj");
}


// - - - - - FUNCTION CALL - - - - - 

// Function define karne se code execute nahi hota, function ko execute karne ke liye call karna padta hai.

greet();  // Hello prathviraj


// - - - - - PARAMETERS AND ARGUMENTS - - - - - - - - - - 

// Parameter: Function define karte waqt jo variable dete hain.
// Argument: Function call karte waqt jo actual value pass karte hain.

function welcome(username) {                     // username = Parameter
    console.log(`Welcome ${username}`);
}

welcome("Rahul");  // Welcome Rahul          // "Rahul" = Argument


// - - - - - MULTIPLE PARAMETERS - - - - - - - - - - 

function add(a, b) {             // Ek function mein multiple parameters bhi ho sakte hain
    console.log(a + b);          // a aur b parameters hain
}

add(10, 20);  // 30          // 10 aur 20 arguments hain.


// - - - - - RETURN STATEMENT - - - - - - - - - - 

// return function se value bahar bhejta hai, return ke baad function ka execution wahi stop ho jata hai.

function multiply(a, b) {
    return a * b;
}

const result = multiply(5, 4);          // Function ki returned value ko variable mein store kar sakte hain.

console.log(result);  // 20


// - - - - - Difference between console.log() and return - - - - - 

function showMessage() {
    console.log("jay hoo");
}

function getMessage() {
    return "jay hoo";
}

showMessage();  // jay hoo

const message = getMessage();
console.log(message);          // jay hoo

// Dono ka output same hai, lekin returned value ko aage reuse kar sakte hain.


// - - - - - FUNCTION EXPRESSION - - - - - - - - - - 

const subtract = function (a, b) {          // Function ko variable mein store karna Function Expression kehlata hai
    return a - b;
};

console.log(subtract(20, 10));  // 10


// - - - - - ANONYMOUS FUNCTION - - - - - - - - - - 

// Jis function ka apna naam nahi hota, use Anonymous Function kehte hain.

const sayHello = function () {            // Yahan function ka naam nahi hai, ye function ek variable mein store hai.
    console.log("Hello World");
};

sayHello();  // Hello World


