const express = require("express");
const User = require("./users-modal");
const router = express.Router();

router.get("/all", (req, res) => {
  User.allUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  User.getUser(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  const profile = req.body;
  const { id } = req.params;
  User.findById(id)
    .then(
      User.updateUser(id, profile)
        .then((updated) => {
          res
            .status(200)
            .json({ message: "profile updated", profile: updated[0] });
        })
        .catch((err) => {
          res.status(500).json({
            message: `Could not update profile '${id}'`,
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
    User.findById(id).then((profile) => {
      User.delUser(profile.id).then(() => {
        res
          .status(200)
          .json({ message: `Profile '${id}' was deleted.`, profile: profile });
      });
    });
  } catch (err) {
    res.status(500).json({
      message: `Could not delete profile with ID: ${id}`,
      error: err.message,
    });
  }
});
module.exports = router;
