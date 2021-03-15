const db = require("../../data/connection");

function allMessages() {
  return db("messages");
}

function findMessagesByChatId(id) {
  return db("messages").where({ chat: id });
}

function findByMsg(filter) {
  return db("messages").where(filter);
}

function findMsgByChatId(chatId){
  // return db('messages as m')
  // .join('userchats as uc', 'm.chatId', 'uc.chatId')
  // .select('m.userId', 'm.messageText')
  // .where('m.chatId', chatId)
  return db('messages as m')
  .select('m.userId', 'm.messageText', 'm.created_at')
  .where({chatId})
}

const findById = async (id) => {
  return db("messages").where({ id }).first("*");
};

function createMsg(msg) {
  return db("messages").insert(msg).returning("*");
}

function updateMsg(id, msg) {
  return db("messages").where({ id }).first().update(msg);
}
function delMsg(id) {
  return db("messages").where({ id }).del();
}

module.exports = {
  allMessages,
  findByMsg,
  createMsg,
  updateMsg,
  delMsg,
  findById,
  findMessagesByChatId,
  findMsgByChatId
};
