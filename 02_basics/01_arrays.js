// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 4,2,2,3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // add 9 in front
// console.log(myArr)
// // myArr.shift()// remove from the front 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // change the array to string 

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr)


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //give u slice 

console.log(myn1);//[1,2]
console.log("B ", myArr);//whole array as it is 


const myn2 = myArr.splice(1, 3) //it also change the the orignal array , which is not hppend in slice , it include the 3 index
// console.log("C ", myArr);// [0, 4,5]
console.log(myn2);//[1,2,3]
