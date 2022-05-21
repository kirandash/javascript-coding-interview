// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

// 1. Write code to get array of names from given array of users
const names = users.map(i => i.name);
console.log(names);

// 2. Get back only active users
const activeUsers = users.filter(i => i.isActive);
console.log(activeUsers);

// 3. Sort users by age descending
const sortUsers = users.sort((a, b) => b.age - a.age);
console.log(sortUsers);

// 4. Sort filter and map
const sortedActiveNames = users.sort((a, b) => b.age - a.age).filter(i => i.isActive).map(i => i.name);
console.log(sortedActiveNames);
