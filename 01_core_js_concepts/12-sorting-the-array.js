// Sort the array of numbers
const nums = [5, 4, 66, 2, 3];
const sortNums = (arr) => arr.sort((a, b) => a - b);
console.log(sortNums(nums));
console.log(nums);

// Sort array of objects by author's lastname

const books = [
  { name: "Warcross", author: "Marie Lu" },
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

const sortBooks = (arr) =>
  arr.sort((a, b) => {
    let lastNameA = a.author.split(" ").pop();
    let lastNameB = b.author.split(" ").pop();
    // Note: For comparing strings: use less than operator since can not subtract strings
    return lastNameA < lastNameB ? 1 : -1;
  });
console.log(sortBooks(books));
