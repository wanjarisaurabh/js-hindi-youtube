// Immediately Invoked Function Expressions (IIFE)
 //if two or more is used used semicolon , qki vo do alg alg ko nai smj pata
// global scope ke polution ko hatane ke liye Iiye

// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })()


((name ) => {
    console.log("henduk ho raha hai ", "henduk " , name);
})("sujit")

//without semicolon its work but for second it will give error 

// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })()

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')

// ()()  first is for defination , second for invoke



 // now it will work since it have semicolon
// (function chai(){ // named IIfe 
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();



// ( (name) => { //unkown IIFe 
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh') // "hitesh " passed as a argument 
