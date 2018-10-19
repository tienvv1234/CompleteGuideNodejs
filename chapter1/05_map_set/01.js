const profiles = new Map();
profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('googleplus', 'ada');
let test = { abc: 'abc' };
profiles.set(test, 'value')
test = null;

console.log('profiles.size', profiles.size); // 3
profiles.has('twitter'); // true
profiles.get('twitter'); // "@adalovelace"
profiles.has('youtube'); // false
profiles.delete('facebook');
profiles.has('facebook'); // false
profiles.get('facebook'); // undefined
for (let entry of profiles) {
  console.log(entry);
}

// 02
const tests = new Map();
tests.set(() => 2 + 2, 4);
tests.set(() => 2 * 2, 4);
tests.set(() => 2 / 2, 1);

for (let entry of tests) {
  console.log(entry[0]() === entry[1] ? 'PASS' : 'FAIL');
}

const s = new Set([0, 1, 2, 3]);

s.add(3); // will not be added
s.size; // 4
s.delete(0);
s.has(0); // false

for (let entry of s) {
  console.log(entry);
}

let set = new Set(['oranges', 'apples', 'bananas']);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});

let john = { name: 'John' };

let map = new Map();
map.set(john, '...');

john = null; // overwrite the reference

// john is stored inside the map
// we can get it by using map.keys()
console.log(map.keys('name'));
for (let entry of map) {
  console.log(entry);
}
