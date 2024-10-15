const iMap = new Map([
  ["Age", "17"],
  ["name", "khurram"],
  ["Depart.", "BCA"],
  [2021, "Admission"]
]);
console.log(iMap);


// using For-of loop
for(let key of iMap.keys()){
  console.log(key);
}

for(let value of iMap.values()){
  console.log(value);
}

for(let [key,value] of iMap.entries()){
  console.log(key,":",value);
}

// using for each loop

iMap.forEach ( (key, value) => {
  console.log(key,value);
})