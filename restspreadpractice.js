//spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); 
//=> Output: [1, 2, 3]

const arr3 = [4, 5, 6];
const mergedArr = [...arr1, ...arr3];

console.log(mergedArr); 
// => Output: [1, 2, 3, 4, 5, 6]

const obj1 = { name: 'John', age: 30 };
const obj2 = { ...obj1, city: 'New York' };

console.log(obj2); // Output: { name: 'John', age: 30, city: 'New York' }

const newArr = [...arr1, 7, 8, ...arr3];

console.log(newArr); // Output: [1, 2, 3, 7, 8, 4, 5, 6]


//rest operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]

const person = { name: 'John', age: 30, city: 'New York' };
const { name, ...restObj } = person;

console.log(name);   // Output: John
console.log(restObj); // Output: { age: 30, city: 'New York' }

function greet(message, ...names) {
  console.log(message + ', ' + names.join(' and '));
}

greet('Hello', 'John', 'Alice', 'Bob'); // Output: Hello, John and Alice and Bob
