const db = require("../../data/connection");

function getAllChats() {
  return db("chat");
}

function getChat(id) {
  return db("chat").where(id);
}

function userChat(chatid) {
  return db("messages as m").select("*").where("m.chat", "=", chatid);
}

module.exports = {
  getAllChats,
  getChat,
  userChat,
};
