// Older approach
const mergeArrays = (arr1, arr2) => arr1.concat(arr2);
// Modern approach
const mergeArrays2 = (arr1, arr2) => [...arr1, ...arr2];

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(mergeArrays(arr1, arr2));
console.log(arr1)
console.log(arr2)
