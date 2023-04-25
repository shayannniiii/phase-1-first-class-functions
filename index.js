function receivesAFunction(callback) {
   
    callback();
  }
  
  function myCallback() {
    console.log("Hello, world!");
  }
  
  receivesAFunction(myCallback);

  function returnsANamedFunction() {
      function namedFunction() {
      console.log("This is a named function!");
    }
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {
  
    return function() {
      console.log("This is an anonymous function!");
    };
  }
  
  
  