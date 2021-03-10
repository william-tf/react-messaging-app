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

router.get('/messages/:id', function (req, res){
    const id = String(req.params.id)
    Group.groupMessages(id)
    .then(msg => {
        res.status(200).json(msg)
    })
})

module.exports = router