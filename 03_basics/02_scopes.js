var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    var c   = 700
}



console.log(a);
// console.log(b);
console.log(c);


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// // one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++



// //aise declare krne pr chal jata ahi 

console.log(addone(5))

function addone(num){
    return num + 1
}


//aise declare krne pr , pehle declare then use krna hota hai
// addTwo(5) 
const addTwo = function(num){
    return num + 2
}

// const hh = 90

// if(1){
//     let  h = 90
//     var jj = 90 
//     const hd = 38
// }

// console.log(jj)  //that'swhy the their is a problem in block scope in var


// the gloabal scope is different in node environment 
// and the browser 