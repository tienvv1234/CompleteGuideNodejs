// Closure
// sumarise: function nested have Lexical environment, this place will store all local variables
// có thể nói mỗi nested function đều có lexical environment và ở đây nó chứa các local variable nên các
// biến như name và x vẫn tồn tại trong đó
function makeFunc() {
  console.log(4);
  const name = 'Mozilla';
  function displayName() {
    console.log(5);
    console.log(name);
    console.log(6);
  }
  console.log(7);
  return displayName;
}
console.log(1);
const myFunc = makeFunc();
console.log(2);
myFunc();
console.log(3);
// Running this code has exactly the same effect as the previous example of the init() function above,
// what's different and interesting is that the displayName() inner function is returned from the outer function before being executed
// At first glance, it may seem unintuitive that this code still works. In some programming language,
// the local variables within a function exist only for the duration of that function's execution.
// Once makeFunc() has finished executing, you might expect that the name variable would no longer
// be accessible. However, because the code still works as expected. this is obviously not the case in JS.
// The reason is that funtions in JS form closures. a closure is the combination of a funtion and the lexical environment
// within which that function was declared. this environment consists of any local variables that
// were in-scope at the time the closure was created. in this case, myFunc is a reference to the instance of the function
// displayName created when makeFunc is run. the instance of displayName maintains a reference to it's
// lexical environment, within which the variable name exists. for this reason, when myFunc is invoked
// the variable name remains avaiable for use and "Mozilla" is passed to alert.

// 1
// 4
// 7
// 2
// 5
// Mozilla
// 6
// 3

function makeAdder(x) {
  console.log('x', x);
  return function(y) {
    console.log('x1', x);
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log('abc');
console.log(add5(2)); // 7
console.log(add10(2)); // 12
