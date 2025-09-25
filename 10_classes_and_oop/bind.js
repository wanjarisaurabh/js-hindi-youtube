function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
  const person = { name: 'Alice' };
  
  // Create a new function with `this` bound to `person`
  const greetAlice = greet.bind(person);


  console.log(greetAlice);//function 
  
  greetAlice('Hello', '!');  // Output: "Hello, Alice!"
  

  //partial 
  function multiply(a, b) {
    return a * b;
  }
  
  // Bind the first argument to 2
  const double = multiply.bind(null, 2);
  
  console.log(double(5));  // Output: 10

  console.log(multiply(1));//nan
  

  // bind -- Returns a new function with this bound to a specific object.

// Does not call the function immediately.
// Commonly used in event handlers in DOM, React components, or delayed execution (like setTimeout).