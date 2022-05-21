// Write a function which implements shuffle

const shuffle = (arr) =>
  arr
  .map((i) => ({ sort: Math.random(), value: i }))
  .sort((a, b) => a.sort - b.sort)
  .map(i => i.value);

console.log(shuffle([1,2,3,4,5,6,7,8,9,10]))