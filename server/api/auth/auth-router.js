const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs')
const createToken = require('./createToken')
const isValid = require('../middleware/username-validation')
const tokenValidation = require('../middleware/restricted-validation')



router.post('/register', (req, res) => {
    const credentials = req.body
    if(isValid(credentials)){
        const hash = bcrypt.hashSync(credentials.password, 10)
        credentials.password = hash
        
    }
})