// Write a function which counts vowels in a string
const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .filter((i) => vowels.includes(i)).length;
};

console.log(countVowels("aeiouastesssaslk allei tesx")); // 12
console.log(countVowels("lllpppyyy")); // 0
console.log(countVowels("aeiou oo")); // 7

// with reduce
const countVowels2 = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, i) => (vowels.includes(i) ? acc + 1 : acc), 0);
};

console.log(countVowels2("aeiouastesssaslk allei tesx")); // 12
console.log(countVowels2("lllpppyyy")); // 0
console.log(countVowels2("aeiou oo")); // 7
