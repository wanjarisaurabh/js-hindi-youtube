// //curing --
// Currying is a functional programming technique in JavaScript (and many other languages) where you transform a function that takes multiple arguments into a sequence of functions that each take one argument. This approach can make functions more reusable and allows you to create specialized functions by pre-filling some arguments.

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




//using the function curing / closure -- 
const fisr_method = function(x){
    return function(y){
        console.log(x * y + " this is the x "+ x+ "this is y " + y);
    }
}

const second_method = fisr_method(2)

second_method(5)

