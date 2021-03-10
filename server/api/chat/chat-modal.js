const db = require("../../data/connection");

function getAllChats() {
  return db("chat");
}

function getChat(id) {
  return db("chat").where({ id });
}

function userChat(chatid) {
  return db("messages as m").select("*").where("m.chat", "=", chatid);
}
//we want chatID that includes the specific users

function addChat(chat) {
  return db("chat").insert(chat);
}

function editChat(id, chat) {
  chat.id = id;
  return db("chat").where({ id }).update(chat);
}

function deleteChat(id) {
  console.log("ID==> ", id);
  return db("chat").where({ id: id }).del();
}

module.exports = {
  getAllChats,
  getChat,
  userChat,
  addChat,
  editChat,
  deleteChat,
};
