const db = require("../../data/connection");

function getChatsByUserId(userId) {
  return db("userchats as uc").select("uc.chatId").where("uc.userid", "=", userId);
}

function getUsersByChatId(chatId) {
  //get full user object from chatID
  return db('userchats as uc')
  .join('users as u', 'uc.userId', 'u.id')
  .where('uc.chatId', chatId)
}


module.exports = { getChatsByUserId, getUsersByChatId };
