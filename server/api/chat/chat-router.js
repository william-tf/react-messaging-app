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
    const id = req.params.id
    
    Chat.userChat(id)
    .then(info => {
        console.log(info)
        res.status(200).json(info)
    })
    .catch(err => res.status(500).json({message: err.message}))
})

router.get('/msg/:id', (req, res) => {
    const id = req.params.id
    Chat.getChat(id)
    .then(chatid => {
        console.log(chatid)
        res.status(200).json(chatid)
    })
    .catch(err => console.log(err))
})

module.exports = router

