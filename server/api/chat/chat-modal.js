const db = require("../../data/connection");

function getAllChats() {
  return db("chat");
}

function getChat(id) {
  return db("chat").where({ id });
}

function userChats(id) {
  // return db("chat").groupBy("chatId").havingIn("users", [id]);
  return db('userchats as uc')
  .join('users as u', 'u.id', 'uc.userId')
  .select("u.firstName", 'u.profilePic', 'u.id', "uc.chatId")
  .where('uc.userId', id)

}

//.select('*').from('users').havingIn('id', [5, 3, 10, 17])

function userChat(chatid) {
  return db("messages as m").select("*").where("m.chatId", "=", chatid);
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
  return db("chat").where({ id: id }).del();
}

module.exports = {
  getAllChats,
  getChat,
  userChat,
  addChat,
  editChat,
  deleteChat,
  userChats,
};
