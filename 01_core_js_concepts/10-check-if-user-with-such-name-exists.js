// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

const isNameExists = (name, arr) => !!arr.find(i => i.name === name);
const isNameExists2 = (name, arr) => arr.some(i => i.name === name);

console.log(isNameExists("Jack", users));
console.log(isNameExists("Jacks", users));
console.log(isNameExists2("Mike", users));
