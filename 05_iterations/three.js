// // for of

console.log(["", "", ""].length); // // [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }


// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "madhya")//it will manupulate the saveed one

console.log(map);

// // for (const [key, value] of map) {
// //     // console.log(key, ':-', value);
// // }

for(const [key , value ] in map){
    console.log(key , value )
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
console.log(myObject);

for (const [key, value] of myObject) {
    console.log(key, ':-', value);

}

// //of -- array and map
// //for array it will point whole value
// //for map [key , value ]
