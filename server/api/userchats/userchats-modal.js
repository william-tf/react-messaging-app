const db = require("../../data/connection");

function getChatsByUserId(userId) {
  return db("userchats as uc").where("uc.userid", "=", userId);
}

function getUsersByChatId(chatId) {
  let userchats = db("userchats as uc").where({ chatId });
  return;
}

module.exports = { getChatsByUserId, getUsersByChatId };
