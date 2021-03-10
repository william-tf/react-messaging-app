function isValid(chat) {
  return Boolean(chat.users && chat.messages);
}

module.exports = {
  isValid,
};
