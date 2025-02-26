// singleton 
// Object.create if we creat obj aise then vo singletone jaise creat hote hai 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // it will acces only by JsUser[full name] , you can't use JsUser.full name 
    [mySym]: "mykey1", // to use a smbol as a key 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log()
// console.log(mySym)

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser) // use to lock 
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

console.log(JsUser)