// Write a function which checks if string is an anagram

// Anagrams are words that have the same characters in the same quantity. This means that two strings are anagrams if we can rearrange one to get the other.
// Here are some examples of words that are anagrams.
// “listen” and “silent”
// “rail safety” and “fairy tales”
// “dormitory” and “dirty room”
// “the eyes” and “they see”

const isAnagram = (w1, w2) =>
  w1
    .split("")
    .sort()
    // filter out empty spaces
    .filter((i) => i !== " ")
    .join("") ===
  w2
    .split("")
    .sort()
    // filter out empty spaces
    .filter((i) => i !== " ")
    .join("");

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("listen", "silents")); // false
console.log(isAnagram("rail safety", "fairy tales")); // true
console.log(isAnagram("dormitory", "dirty room")); // true
console.log(isAnagram("the eyes", "they see")); // true
