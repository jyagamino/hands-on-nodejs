"use strict"

function* countUpTo(n) {
    let count = 1;
    while (count <= n) {
        yield count;
        count++;
    }
}

const counter = countUpTo(5);

console.log(counter.next().value);  // 1
console.log(counter.next().value);  // 2
console.log(counter.next().value);  // 3
console.log(counter.next().value);  // 4
console.log(counter.next().value);  // 5
console.log(counter.next().value);  // undefined