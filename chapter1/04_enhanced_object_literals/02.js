module.exports = {
  square(x) {
    return x * x;
  },
  cube(x) {
    return x * x * x;
  }
};

console.log(module.exports);

let namespace = '-webkit-';
let style = {
  [namespace + 'box-sizing']: 'border-box',
  [namespace + 'box-shadow']: '10px 10px 5px #888888'
};

console.log(style);

let person = {
  name: 'George',
  surname: 'Boole',

  get fullname() {
    return this.name + ' ' + this.surname;
  },

  set fullname(fullname) {
    let parts = fullname.split(' ');
    this.name = parts[0];
    this.surname = parts[1];
  }
};

console.log(person.fullname); // "George Boole"
console.log((person.fullname = 'Alan Turing')); // "Alan Turing"
console.log(person.name); // "Alan"
