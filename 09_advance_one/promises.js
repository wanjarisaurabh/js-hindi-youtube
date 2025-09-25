//read from the mdn




// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// const promiseone = new Promise()

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){  
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});




async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


//promise mean - a object which represent a value which you will get now / later / never 




// // Simulate fetching data from a server using Promise
// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         // Simulate a network delay
//         setTimeout(() => {
//             const users = {
//                 1: { name: "Alice", age: 25 },
//                 2: { name: "Bob", age: 30 }
//             };

//             if (users[userId]) {
//                 resolve(users[userId]); // Data found, resolve the promise
//             } else {
//                 reject("User not found"); // Data not found, reject the promise
//             }
//         }, 1000); // 1-second delay to simulate API
//     });
// }

// // Using .then() and .catch()   -1st way
// fetchUserData(1)
//     .then(user => {
//         console.log("Using .then():", user);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });

// // Using async/await --- 2nd way 
// async function showUser(userId) {
//     try {
//         const user = await fetchUserData(userId); // Wait for the promise to resolve
//         console.log("Using async/await:", user);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// showUser(3); // User 3 does not exist, will trigger error
