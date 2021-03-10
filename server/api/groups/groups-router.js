const express = require('express');
const Group = require('./groups-modal')
const router = express.Router()

router.get('/all', (req, res) =>{
    Group.allGroups()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => console.log(err))
})

module.exports = router