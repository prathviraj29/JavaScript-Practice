
// - - - - - NESTED OBJECTS - - - - - - - - - - 

const student = {
    name: "Rahul",
    age: 21,

    address: {                          // Ek object ke andar doosra object hona Nested Object 
        city: "reeva",
        state: "Madhya Pradesh"
    }
};

console.log(student.address.city);   // "reeva"         // Nested object ki properties access karna
console.log(student.address.state);


// - - - - - Object.keys() - - - - - - - - - - 

// Object.keys() object ki saari property names ko ek array mein return karta hai.

const studentInfo = {
    name: "aman",
    age: 21,
    course: "B.Tech"
};

console.log(Object.keys(studentInfo));  // ["name", "age", "course"]


// - - - - - Object.values() - - - - - - - - - - 

// Object.values() object ki saari properties ki values ko ek array mein return karta hai.

console.log(Object.values(studentInfo));  // ["aman", 21, "B.Tech"]


// - - - - - Object.entries() - - - - - - - - - - 

// Object.entries() properties aur values ko key-value pairs ke array mein return karta hai

console.log(Object.entries(studentInfo));  /* [
                                                ["name", "aman"],
                                                ["age", 21],
                                                ["course", "B.Tech"]
                                              ] */


// - - - - - Object.assign() - - - - - - - - - - 

// Object.assign() ek ya multiple objects ki properties ko target object mein copy karta hai.

const obj1 = {
    name: "poorvi"
};

const obj2 = {
    age: 19
};

const result = Object.assign({}, obj1, obj2);          // Empty object {} target hai, isliye ek naya object create hoga.

console.log(result);  // { name: "poorvi", age: 19 }


// - - - - - OBJECT DESTRUCTURING - - - - - - - - - - 

// Destructuring se object ki properties ko directly alag variable mein nikal sakte hain.

const studentData = {
    name: "chetan",
    age: 20,
    course: "B.Tech"
};

const { name, age, course } = studentData;          // Property names aur variable names same hone chahiye.

console.log(name);
console.log(age);
console.log(course);

// - - - - - - - - - - Destructuring karte waqt variable ka naam bhi change kar sakte hain.

const {
    name: studentName,
    age: studentAge
} = studentData;

console.log(studentName);  // chetan    
console.log(studentAge);   // 20

