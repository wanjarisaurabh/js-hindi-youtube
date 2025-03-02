// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// //flase , 0 , -0 , bigInt 0n , "" , null , undefined , NaN 

// //truthy values
// // "0", 'false', " ", [], {}, function(){}


// //to check an array is it empty 
// // if (userEmail.length === 0) {
// //     console.log("Array is empty");
// // }

// const emptyObj = {
//     name : 'sarabh ',
//     age : '39',
//     mohina : "sunita"
// }
// console.log(Object.keys(emptyObj).length )

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

const obj = {
}

console.log(Object.keys(obj).length)



// console.log(val1);

// // Terniary Operator

// // condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")