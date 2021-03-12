const express = require("express");
const Chat = require("./chat-modal");
const router = express.Router();
const { isValid } = require("../middleware/chat-validation");

router.get("/chat/:id", (req, res) => {
  Chat.getChat(req.params.id)
    .then((chat) => {
      res.status(200).json(chat);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.get("/chats", (req, res) => {
  Chat.getAllChats()
    .then((chats) => {
      res.status(200).json(chats);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.get("/chat/:id/messages", (req, res) => {
  Chat.userChat(req.params.id)
    .then((messages) => {
      res.status(200).json(messages);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.get("");

router.post("/chats", (req, res) => {
  if (isValid(req.body)) {
    Chat.addChat(req.body)
      .then((chat) => {
        res.status(201).json({ message: "Successful post attempt!" });
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  } else {
    res.status(500).json({ message: "You did not pass a valid object." });
  }
});

router.put("/chat/:id", (req, res) => {
  const newChat = req.body;
  const id = req.params.id;

  Chat.getChat(id)
    .then(() => {
      if (isValid(newChat)) {
        Chat.editChat(id, newChat)
          .then((chat) => {
            res.status(201).json({ message: "Successful put attempt!" });
          })
          .catch((err) => {
            res.status(500).json({ message: err.message });
          });
      } else {
        res.status(500).json({ message: "You did not pass a valid object." });
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: `Could not find chat with id ${id}`,
        error: err.message,
      });
    });
});

router.delete("/chat/:id", (req, res) => {
  try {
    Chat.getChat(req.params.id).then((chat) => {
      console.log("CHAT RETURNED FROM VALID===> ", chat);
      Chat.deleteChat(chat[0].id).then(() => {
        res.status(204).json({ message: `Chat with id ${chat.id} deleted.` });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete chat with id ${id}`,
      error: err.message,
    });
  }
});

module.exports = router;
