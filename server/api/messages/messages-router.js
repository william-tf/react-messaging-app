const express = require('express');
const Message = require('./messages-modal')
const router = express.Router()



router.get('/all', (req, res) =>{
    Message.allMessages()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => console.log(err))
})

module.exports = router