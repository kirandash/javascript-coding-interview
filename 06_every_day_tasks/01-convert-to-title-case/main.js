// Write a function to convert a string to title case

// Provided test cases
//   titleCase(“I’m a little tea pot”) should return a string.
//   titleCase(“I’m a little tea pot”) should return “I’m A Little Tea Pot”.
//   titleCase(“sHoRt AnD sToUt”) should return “Short And Stout”.
//   titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”) should return “Here Is My Handle Here Is My Spout”.

const toTitleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(toTitleCase("I’m a little tea pot")); // I’m A Little Tea Pot
console.log(toTitleCase("sHoRt AnD sToUt")); // Short And Stout
console.log(toTitleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // Here Is My Handle Here Is My Spout
