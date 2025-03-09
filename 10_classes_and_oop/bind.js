function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
  const person = { name: 'Alice' };
  
  // Create a new function with `this` bound to `person`
  const greetAlice = greet.bind(person);
  
  greetAlice('Hello', '!');  // Output: "Hello, Alice!"
  

  //partial 
  function multiply(a, b) {
    return a * b;
  }
  
  // Bind the first argument to 2
  const double = multiply.bind(null, 2);
  
  console.log(double(5));  // Output: 10
  