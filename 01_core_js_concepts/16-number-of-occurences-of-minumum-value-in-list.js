// Find the number of occurences of minimum value in the list

const arr = [1, 2, 3, 1, 1];

const occurOfMinValue = (items) => items.filter(i => i === Math.min(...items)).length;

console.log(occurOfMinValue(arr))
