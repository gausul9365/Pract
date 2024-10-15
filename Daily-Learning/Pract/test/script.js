function square(a) {
  return a * a;
}

let number = 5;
let result = square(number);
console.log("The square of " + number + " is " + result);


// const { fileURLToPath } = require("url");

const { default: test } = require("node:test");

// const name = ["A", "Gabreil", "Azrail", "Israfil", "Michael"];
// let age = [25, 30, 35, 40];

// // console.log(name[2]);
// // console.log(age[2]);
// // console.log(name[3]);

// // name[0] = "B";
// // console.log(name[0]);
// // console.log(name);
// // 

// // You can also create an array, and then provide the elements:
// const array = [];
// array[0] = "gausul wara";
// array[1] = "Khurram Ali";
// array[5] = "space";

// // console.log(array);
// array[1] = "Ali khurram";

// // console.log(array);

// const arrToString = array.toString();
// // console.log(arrToString);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let lengthOfFruits = fruits.length;
// console.log(lengthOfFruits);
// // accesing the last element
// let lastElement = fruits[fruits.length-1];
// console.log(lastElement);
// const stringValues = fruits.toString();
// // console.log(stringValues);



// const person = {firstName:"John", lastName:"Doe", age:46};

// const element = {
//   one: "Hydrogen",
//   two: "Helium",
//   three: "Lithium",
//   four: "Beryllium", 
//   five: "Boron"
// };
// let Total_length = element.one.length;
// console.log(Total_length);


// const nothing = element.one;
// // console.log(element);
// // console.log(element.three);

// const lambai = nothing.length ;
// // console.log(lambai);


// // {
// //   const name = ["A", "B", "C", "D"];
// //   console.log(name);
// // }

// // console.log(name);


// const angel = ["A", "Gabreil", "Azrail", "Israfil", "Michael"];
// let nameLen = angel.length;

// angel.push("angel");
// console.log(angel);

// nested array and object

const angel = {
  other_relegion: "Christian",
  True_relegion: "Islam",
  angel_name : [
    { angel_one: "Gabreil", work:["message", "of", "Allah", "to", "the", "Prophet PBUH"]},
     { angel_two: "Azrail"},
      {angel_three:  "Israfil"}, 
      {angel_four: "Michael"}
  ]
}
console.log("angel_name array:", angel.angel_name);
console.log("First element of angel_name:", angel.angel_name[0]);
console.log("angel_one object:", angel.angel_name[0].angel_one);
console.log("work array:", angel.angel_name[0].angel_one.work);
//end basic 




