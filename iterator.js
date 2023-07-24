"use strict";

const array = ["apple", "banana", "cherry"];
const iterator = array[Symbol.iterator]();

// console.log(iterator.next());  // { value: 'apple', done: false }
// console.log(iterator.next());  // { value: 'banana', done: false }
// console.log(iterator.next());  // { value: 'cherry', done: false }
// console.log(iterator.next());  // { value: undefined, done: true }

for (const value of iterator) {
  console.log(value);
}
