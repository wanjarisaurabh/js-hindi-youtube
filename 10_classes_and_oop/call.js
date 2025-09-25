// function borrowing 
// When you want to borrow a method from one object and use it in another.
// const ob1 ={
//     first : "saurabh ",
//     Last : "wanjari",
//     herro: function(){
//         console.log(this.first)
//         console.log(this.Last)
// //     }
// // }

// // ob1.herro()

// // // console.log("______------______")
// // const ob2 ={
// //     first : "prem ",
// //     Last : "wanjari"
// // }

// // ob1.herro.call(ob2) // prem wanjari


// //in real word 
// const ob1 ={
//     first : "saurabh ",
//     Last : "wanjari",
// }


// function imf(work){
//     console.log(this.first)
//     console.log(this.Last)
//     console.log(work)
// }

// // const s = imf.bind(ob1);
// // s("hello");//saurabh wanjari hello

// // imf.call(ob1 , "sleeping ") //saurabh wanjarii sleeping

// // console.log("______------______")
// const ob2 ={
//     first : "prem ",
//     Last : "wanjari"
// }

// imf.call(ob2) //prem wanjari



// function greet(greeting, punctuation) {
//     console.log(greeting + ', ' + this.name + punctuation);
//   }
  
//   const person = { name: 'Alice' };
  
//   // Using call: arguments are passed individually.
//   greet.call(person, 'Hello', '!');  // Output: "Hello, Alice!"
  

//   const hell = greet.bind(person)
//   hell("namaster", "lavde") //namaster Alicelavde

// //Apply 

// Useful when you have an array of arguments that you want to pass to a function.
const ob1 ={
    first : "saurabh ",
    Last : "wanjari",
   
}
// function imf(name  , friedn){
//     console.log(this.first);
//     console.log(this.Last);
//     console.log(name + " "+friedn)
// }

function imf(...name){
    console.log(this.first);
    console.log(this.Last);
    console.log(name + " ")
}



imf.apply(ob1 , ["saruabh ","sumit "] )
// imf.apply(ob1 , ["saruabh ","sumit "])







// function SetUsername(username){
//     //complex DB calls
//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password){
//     SetUsername.call(this, username)
   
//     this.email = email
//     this.password = password
// }

// const chai = new createUser("chai", "chai@fb.com", "123")
// console.log(chai);


