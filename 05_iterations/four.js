// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
// // //not possible
// // for (const [key , value] of myObject) {

// //     console.log(key , value);
    
// // }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key of programming) {
//     console.log(key);
// }

// for (const key in programming) {
//     console.log(key);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(map[key]);
// }

for(const key of map){
    console.log(key);
}

//for in work for obj , and arra 
//Arr - give usss key 
//obj also give keys 