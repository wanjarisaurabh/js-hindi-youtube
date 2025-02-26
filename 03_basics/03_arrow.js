const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // not worked 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// this -- point to current contex 
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

//explicite return 
 //const addTwo = (nm , num3) => {
    return num1+ num2 }

//implicitre return -- pust have to use () 
// const addTwo = (num1, num2) => ( num1 + num2 )
//returning obj 
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// const person = {
//     name: "Alice",
//     greet: function() {
//       console.log(`Hello, I'm ${this.name}`);  // ✅ 'this' refers to 'person'
//     }
//   };
  
//   person.greet();  // Output: Hello, I'm Alice
  


//   const person = {
//     name: "Bob",
//     greet: () => {
//       console.log(`Hello, I'm ${this.name}`);  // 🚫 'this' is undefined here
//     }
//   };
  
//   person.greet();  // Output: Hello, I'm undefined 😱
  