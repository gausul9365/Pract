// map object is prebuilt feature that allows to  store key-values pairs 

const { Console } = require("console");


const myMap = new Map(); 
const iMap = new Map([
  ["Age", "17"],
  ["name", "khurram"],
  ["Depart.", "BCA"],
  [2021, "Admission"]
]);
console.log(iMap);


// Adding ya setting the key value to the map -update bhi kr skte hai

iMap.set("Age", "18");
console.log(iMap);
iMap.set("State", "UP");
console.log(iMap);

// get the value from the map

console.log(iMap.get(2021));
console.log(iMap.get('Depart.'));

// Checking value exist or not 

console.log(iMap.has('State'));
console.log(iMap.has(2021));
console.log(iMap.has('education'));

// Deleting a key-values pair

iMap.delete('Depart.');
console.log(iMap);

// size of map

console.log(iMap.size);

iMap.clear();

console.log(iMap);
console.log(iMap.size);

// Basics End

