const dateTransformations = {
    YEAR: d => d.getUTCFullYear(),
    MONTH: d => d.getUTCMonth(),
    DAY: d => d.getUTCDate(),
    HOUR: d => d.getUTCHours(),
    MINUTE: d => d.getUTCMinutes(),
    SECOND: d => d.getUTCSeconds()
};

// Example usage:
const date = new Date('2024-06-21T09:46:50Z'); // A date object

console.log(dateTransformations.YEAR(date));   // Output: 2024
console.log(dateTransformations.MONTH(date));  // Output: 5 (June, since months are zero-indexed)
console.log(dateTransformations.DAY(date));    // Output: 21
console.log(dateTransformations.HOUR(date));   // Output: 9
console.log(dateTransformations.MINUTE(date)); // Output: 46
console.log(dateTransformations.SECOND(date)); // Output: 50
