// Lexical scoping

function init() {
  console.log(3);
  const name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    console.log(4);
    // const name = 1;
    // displayName() is the inner function, a closures
    console.log(name); // user variable declared in the parent function
    console.log(5);
  }
  console.log(6);
  displayName();
  console.log(7);
}
console.log(1);
init();
console.log(2);
// print out the Name: Mozilla
// note : However, the same local variables in displayName() will be used if they exist

// 1
// 3
// 6
// 4
// Mozilla
// 5
// 7
// 2
