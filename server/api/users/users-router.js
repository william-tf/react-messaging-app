const express = require('express');
const User = require('./users-modal')
const router = express.Router()

router.get('/all', (req, res) =>{
    User.allUsers()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => console.log(err))
})

router.get('/user/:id', (req, res) => {
    const id = req.params.id
    User.getUser(id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(err => console.log(err))
})

module.exports = router