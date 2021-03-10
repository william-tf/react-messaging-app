const express = require('express');
const Chat = require('./chat-modal')
const router = express.Router()


router.get('/allmsg', (req, res) => {
    Chat.getAllChats()
    .then(chat => {
        res.status(200).json(chat)
    })
    .catch(err => res.status(500).json({message: err.message}))
})
router.get('/messages/:id', (req, res) => {
    Chat.userChat(req.params.id)
    .then(msg => {
        res.status(200).json(msg)
    })
    .catch(err => res.status(500).json({message: err.message}))
})

module.exports = router

