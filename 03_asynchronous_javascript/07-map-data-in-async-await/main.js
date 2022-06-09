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

const getMappedUsers = async () => {
  try {
    const users = await getUsers();
    const userStatuses = await getUserStatuses();
    console.log(mapUsers(users, userStatuses));
  } catch(e) {
    console.error(e);
  }
}

getMappedUsers();
