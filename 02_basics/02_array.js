const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

const arr = ["saurba " , "saurba " , 89 , true]  // is hetrogenouse

console.log(arr)

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// // marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] //using spread op

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) //need to pass depth
// console.log(real_another_array);

console.log(Array.from("hitesh "));

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "hitesh" })); // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));

// console.log(Array.of("saurabh " , "mohit " , " namrataa" ))
console.log(
  Array.of({ name: "saurbaj ", age: 29 }, { name: "mohit", age: 49 })
);
