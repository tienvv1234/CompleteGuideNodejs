let obj = {};
const map = new WeakMap();
map.set(obj, { key: 'some_value' });
console.log(map.get(obj)); // {key: "some_value"}
obj = undefined; 
// now obj and the associated data in the map will be cleaned up in the next gc cycle
console.log(map.get(obj));
console.log('map', map);
map.set(obj, { key1: 'some_value11' });
console.log(map.get(obj));