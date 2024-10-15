// filter 

const paani = ["null", "pump", "hand", "tillu", "lister", "PumpingSet", "talab"];

const container = paani.filter(word => word.length>4);

console.log(container);

// returns a new arary without modifying the original array
// consider only true values and exclude the false value


// reduce method4
const numbers = [1,3,5,7,8,6];
const product = numbers.reduce((acc, num) => acc*num, 1);
console.log(product);


// key points:-
// filter: it filter a existing array by doing some operation with result true and faslse and those element will be true copy it to another array
// reduce: reduces an array into single element by accumulating the each element
