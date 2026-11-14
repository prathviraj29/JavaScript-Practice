
// - - - - - - - - - - OBJECTS - - - - - - - - - -

const student = {
    name: "Ambulkar",
    age: 21,
    course: "B.Tech",
    branch: "Computer Science",
    isGraduated: false
};

console.log(student);


// - - - - - Accessing Object Properties - - - - - - - - - -

// (A) Dot Notation - Property ko access karne ka sabse common method.

console.log(student.name);
console.log(student.age);


// (B) Bracket Notation - Property ko square brackets ke andar string ke form mein likhte hain.

console.log(student["name"]);
console.log(student["course"]);


// - - - - - Updating Object Properties - - - - - - - - - -

student.age = 22;                       // Existing property ki value change kar sakte hain.
student.course = "B.Tech CSE";          

console.log(student);


// - - - - - Adding New Properties - - - - - - - - - - 

student.city = "Khargone";          // Object mein new property bhi add kar sakte hain.                
student.college = "SDBC";

console.log(student);


// - - - - - Deleting Object Properties - - - - - 

delete student.isGraduated;          // delete keyword se property remove kar sakte hain.

console.log(student);


// - - - - - Checking Property in Object - - - - - - - - 

console.log("name" in student);    // true          // 'in' operator check karta hai ki property object mein exist karti hai ya nahi
console.log("salary" in student);  // false


// - - - - - Object.seal() - - - - - - - - - - 

Object.seal(student);     // object ko seal kar deta hai, Iske baad new properties add ya delete nahi kar sakte.

student.age = 23;          // Lekin existing properties ki values update kar sakte hain.
student.fee = 100000;      // not allowed


// - - - - - Object.freeze() - - - - - - - - - - 

Object.freeze(student);     // object ko freeze kar deta hai, Iske baad existing properties ko update ya delete bhi nahi kar sakte.

student.name = "Chetan";            // Change nahi hoga          
student.fee = 100000;               // Aur new properties bhi add nahi kar sakte.

console.log(student);


