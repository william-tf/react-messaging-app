const express = require("express");
const Message = require("./messages-modal");
const router = express.Router();

router.get("/all", (req, res) => {
  Message.allMessages()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Message.findById(id)
    .then((message) => {
      res.status(200).json(message);
    })
    .catch((err) => res.status(500).json({ message: err }));
});

router.get("/chat/:id", (req, res) => {
  const id = req.params.id;
  Message.findMessagesByChatId(id)
    .then((messages) => {
      res.status(200).json(messages);
    })
    .catch((err) => res.status(500).json({ message: err }));
});

router.put("/:id", (req, res) => {
  const msg = req.body;
  const { id } = req.params;
  Message.findById(id)
    .then(
      Message.updateMsg(id, msg)
        .then((updated) => {
          res.status(200).json({ message: "message updated", msg: updated[0] });
        })
        .catch((err) => {
          res.status(500).json({
            message: `Could not update message '${id}'`,
            error: err.message,
          });
        })
    )
    .catch((err) => {
      res.status(404).json({
        message: `Could not find profile '${id}'`,
        error: err.message,
      });
    });
});
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  try {
    Message.findById(id).then((msg) => {
      Message.delMsg(msg.id).then(() => {
        res
          .status(200)
          .json({ message: `message '${id}' was deleted.`, msg: msg });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete message with ID: ${id}`,
      error: err.message,
    });
  }
});

router.post("/:id", (req, res) => {
  Message.createMsg(req.body)
    .then((msg) => {
      res.status(201).json({ message: "messaged created :)" });
    })
    .catch(() => {
      res.status(500).json({ message: "unable to create message" });
    });
});

module.exports = router;
