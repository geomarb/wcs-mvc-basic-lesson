const fakeDB = require("../../fakeDB.json");

const users = fakeDB.users;

function getUsers() {
  return users;
}

function getUserById(id) {
  return users.filter((user) => user.id === id);
}

function createUser({ id, name } = {}) {
  if (!id) throw new Error("Id is mandatory");

  if (!name) throw new Error("Name is mandatory");
  users.push({ id, name });

  return users;
}

function updateUser(id, name) {
  if (!id) throw new Error("Id is mandatory");

  if (!name) throw new Error("New Name is mandatory");

  const index = users.findIndex((user) => user.id === id);

  users[index].name = name;

  return users[index];
}

module.exports = { getUsers, getUserById, createUser, updateUser };
