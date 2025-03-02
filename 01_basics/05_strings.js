const name = "hitesh" //string literal
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //interpolation 

const gameName = new String('hitesh-hc-com') //string declare by string obj

// console.log(gameName[0]);
console.log(gameName.__proto__);// proto is a refernc to string prototype it worked in browser 


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
console.log(gameName.charAt(1))

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   hitesh    "
// console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
console.log(url.replace('hitesh' , 'pandhu'))
console.log(url.includes('hitesh')) //hai ya nai

// console.log(gameName.split('-'));