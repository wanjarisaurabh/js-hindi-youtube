// //new keyword 


// // function multipleBy5(num){

// //     return num*5
// // }

// // multipleBy5.power = 2 //fucntion is also an object 

// // // console.log(multipleBy5(5));
// // console.log(multipleBy5.power);
// // console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
    return this;
}

console.log(createUser.prototype);
// createUser.add = 80


// const hima = createUser("saurabh:", 20);

// console.log(createUser.add)
// console.log(hima.add)

// // createUser.prototype.increment = function(){
// //     this.score++
// // }
// // createUser.prototype.printMe = function(){
// //     console.log(`price is ${this.score}`);
// // }

// // const chai = new createUser("chai", 25)
// // const tea = createUser("tea", 250)

// // chai.printMe()


// // /*

// // Here's what happens behind the scenes when the new keyword is used:

// // A new object is created: The new keyword initiates the creation of a new JavaScript object.

// // A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// // The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// // The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

// // */Make a new empty object.

// Link it to the constructor’s prototype.

// Run the constructor function with this = the new object.

// Return the new object automatically (unless you return something else explicitly).


// In JavaScript, every object has a prototype.

// A prototype is another object that serves as a template or blueprint for that object.

// If you try to access a property or method on an object, and it doesn’t exist on the object itself, JavaScript looks for it in the prototype.

// This is called prototypal inheritance.