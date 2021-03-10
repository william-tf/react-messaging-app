const db = require('../../data/connection')

function allMessages(){
    return db('messages')
}

module.exports = {
    allMessages
}