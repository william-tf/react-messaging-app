const express = require("express");
const UserChats = require("./userchats-modal");
const router = express.Router();

router.get("/user/:userId", (req, res) => {
  UserChats.getChatsByUserId(req.params.userId)
    .then((chats) => {
      res.status(200).json(chats);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/chat/:chatId", (req, res) => {
  UserChats.getUsersByChatId(req.params.chatId)
    .then((users) => {
      console.log(users);
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
