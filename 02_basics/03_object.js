
// - - - - - - - - - - OBJECTS - - - - - - - - - -

const student = {
    name: "Prathviraj",
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

// Existing property ki value change kar sakte hain.

student.age = 22;
student.course = "B.Tech CSE";

console.log(student);


// - - - - - Adding New Properties - - - - - - - - - - 

// Object mein new property bhi add kar sakte hain.

student.city = "Khargone";
student.college = "Sushila Devi Bansal College";

console.log(student);


// - - - - - Deleting Object Properties - - - - - 

// delete keyword se property remove kar sakte hain.

delete student.isGraduated;

console.log(student);

