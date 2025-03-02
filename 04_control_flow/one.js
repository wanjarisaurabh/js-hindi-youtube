// // if
// const isUserloggedIn = true
// const temperature = 41
//to end any state me use ;

// // if ( temperature === 40 ){
// //     console.log("less than 50");
// // } else {
// //     console.log("temperature is greater than 50");
// // }

// // console.log("Execute");
// // <, >, <=, >=, ==, !=, ===, !==
// === , !== used to check the type and the value

// // const score = 200

// // if (score > 100) {
// //     let power = "fly"
// //     console.log(`User power: ${power}`);
// // }

// // console.log(`User power: ${power}`);


// // const balance = 1000

// // if (balance > 500) console.log("test"),console.log("test2");

// if(30 > 20 ) console.log("hess skd") 
// // if (balance < 500) {
// //     console.log("less than 500");
// // } else if (balance < 750) {
// //     console.log("less than 750");
    
// // } else if (balance < 900) {
// //     console.log("less than 750");
    
// // } else {
// //     console.log("less than 1200");

// // }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }

//inner function always  with no name also known as anonymouse function 
function multiplier(factor) {
    return function (number) {
        return number * factor;
    }
}

const double = multiplier(2);
// console.log(double);
let hey = multiplier(3) //let holdin referenc of a function 
console.log(hey(8));
console.log(double(5)); // Output: 10
console.log(double(8)); // Output: 16

const triple = multiplier(3);
console.log(triple(5)); // Output: 15
