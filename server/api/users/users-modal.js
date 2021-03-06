const db = require("../../data/connection");

function allUsers() {
  return db("users");
}
const findById = async (id) => {
  return db("users").where({ id }).first("*");
};

function getUser(id) {
  return db("users").where({ id }).first();
}

function addUser(user) {
  return db("users").insert(user, "id");
}

function findUser(email) {
  return db("users")
    .select(
      "users.username",
      "users.id",
      "users.email",
      "users.profilePic",
      "users.firstName",
      "users.lastName"
    )
    .where({ email });
}

function findByUsername(username) {
  return db("users")
    .select(
      "users.username",
      "users.id",
      "users.email",
      "users.profilePic",
      "users.firstName",
      "users.lastName"
    )
    .where({ username });
}

function findByUsernameForLogin(username) {
  return db("users")
    .select(
      "users.username",
      "users.id",
      "users.email",
      "users.profilePic",
      "users.firstName",
      "users.lastName",
      "users.password"
    )
    .where({ username });
}

async function addUser(user) {
  const [id] = await db("users").insert(user, "id");
}
function delUser(id) {
  return db("users").where({ id }).del();
}

function updateUser(id, user) {
  return db("users").where({ id: id }).first().update(user).returning("*");
}
module.exports = {
  allUsers,
  getUser,
  addUser,
  findUser,
  delUser,
  updateUser,
  findById,
  findByUsername,
  findByUsernameForLogin,
};
