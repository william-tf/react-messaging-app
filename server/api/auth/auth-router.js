const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs')
const createToken = require('./createToken')
const {isValid} = require('../middleware/username-validation')
const tokenValidation = require('../middleware/restricted-validation')
const User = require('../users/users-modal')


router.post('/signup', (req, res) => {
    const credentials = req.body
    if(isValid(credentials)){
        const hash = bcrypt.hashSync(credentials.password, 10)
        credentials.password = hash
        User.addUser(credentials)
        .then(user => {
            res.status(201).json({data:user})
        })
        .catch(err => res.status(500).json({message: err.message}))
    } else{
        res.status(401).json('wrong credentials')
    }
})

router.post('/login', (req, res) => {
if(isValid(req.body)){
    User.findUser({email: req.body.email})
    .then(([user]) => {
        if(user && bcrypt.compareSync(req.body.password, user.password)){
            const token = createToken(user)
            res.status(200).json({
                token
            })
        } else {
            res.status(401).json('nice try, something went wrong with user/password')
        }
    })
    .catch(err => res.status(500).json(err.message))
} else{
    res.status(401).json('wrong credentials')
}
})

module.exports = router