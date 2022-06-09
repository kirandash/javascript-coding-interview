// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive

const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];
const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

// Naive Solution - nested promises
// Pure function separated out
const mapUsers = (users, userStatuses) => {
  return users.map(user => {
    const isActive = userStatuses.find(userStatus => userStatus.id === user.id).isActive;
    return { ...user, isActive }
  });
}

getUsers().then(users => {
  getUserStatuses().then(userStatuses => {
    const mappedUsers = mapUsers(users, userStatuses);
    console.log(mappedUsers);
  })
})

// Better solution - with promise.all
Promise.all([ getUsers(), getUserStatuses() ])
  // First then to get the result
  .then(([ users, userStatuses ]) => mapUsers(users, userStatuses))
  // Work with the result
  .then(mappedUsers => console.log(mappedUsers));
