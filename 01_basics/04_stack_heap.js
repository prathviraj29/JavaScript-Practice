
// - - - - - - - - # Stack (primitive) :- - - - - - - - 

let myRealName = "Chetan";

let mySchoolName = myRealName;          // myRealName ki value copy hokar mySchoolName mein aayi.
mySchoolName = "Prathviraj";            // Ab hum sirf copied value change kar rahe hain

console.log(mySchoolName);  // Prathviraj
console.log(myRealName);  // Chetan

// Stack :- not change original data, only change in Copy
//          stack se koi chizz(kisi chizz ka data) lenge to uski copy hi milegi original data access nahi milega change bhi copy me hi hogaa


// - - - - - - - - # Heap (non-Primitive) :- - - - - - - - 

let userOne = {
    email : "chetan@gmail.com",
    upi : "userOne@ybl"
}

let userTwo = userOne;          // userOne ka reference userTwo mein copy hua.

userTwo.email = "praviraj@gmail.com";           // userTwo se change karne par bhi same object update hoga.

console.log(userOne.email);  // praviraj@gmail.com
console.log(userTwo.email);  // praviraj@gmail.com

// heap :- change in original(reference) data, 
//         heap se koi chizz(kisi chizz ka data) lenge to uska original data access milega or original data change hoga

