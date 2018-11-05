function add(a, b) {
  console.log(`a1 : ${a}, b1: ${b}`);
  return a - b;
}

function add(a, b, callback) {
  console.log(`a : ${a}, b: ${b}`);
  callback(a + b);
}

console.log('before');
add(1, 2, result => console.log(`Result: ${result}`));
console.log('after');

function additionAsync(a, b, callback) {
  setTimeout(() => callback(a + b), 10000);
}

console.log('before');
additionAsync(1, 2, result => console.log(`Result: ${result}`));
console.log('after');
