// Example 1: p.fields exists and is truthy
let p = { fields: { name: 'John', age: 30 } };
const hash = p.fields || (p.fields = {});
console.log(hash); // Output: { name: 'John', age: 30 }

// Example 2: p.fields does not exist or is falsy
let q = { };
const hash2 = q.fields || (q.fields = {});
console.log(hash2); // Output: {}
console.log(q.fields); // Output: {}
