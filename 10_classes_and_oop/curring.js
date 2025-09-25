// //curing --
// // Currying is a functional programming technique in JavaScript (and many other languages) where you transform a function that takes multiple arguments into a sequence of functions that each take one argument. This approach can make functions more reusable and allows you to create specialized functions by pre-filling some arguments.
// Ah! Currying is a functional programming concept in JavaScript. It’s all about breaking a function that takes multiple arguments into a series of functions that each take one argument.
// //using bind method 
// const ob1 =function (x, y){
// console.log("this is x " + x + "this is " +y);
// console.log(x* y);
// }

// //works properly
// // const multiply = ob1.bind(this, 2)
// // multiply(5)

// const multiplybyTwo = ob1.bind(this, 2, 3);
// multiplybyTwo(5) //  a = 2 , b = 3 and 6 also it ignore 5 




// //using the function  closure -- 

// A closure is when a function remembers the variables from the scope where it was created, even after that scope has finished executing.

// In other words: a function “closes over” its surrounding variables.

// Closures are very useful for data privacy and state management.

// function outer() {
//     let count = 0; // variable inside outer function

//     function inner() {
//         count++; // inner function can access outer's variable
//         return count;
//     }

//     return inner;
// }

// const counter = outer();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

const fisr_method = function(x){
    return function(y){
        console.log(x * y + " this is the x "+ x+ "this is y " + y);
    }
}

const second_method = fisr_method(2)

second_method(5)



//curing -- Currying is when a function takes multiple arguments one at a time, returning a new function for each argument until all arguments are provided.

// Instead of f(a, b, c), you do f(a)(b)(c).

// Makes functions more modular and reusable.
//Example

// function add(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// console.log(add(2)(3)); // 5
