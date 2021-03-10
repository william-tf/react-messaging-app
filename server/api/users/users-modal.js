const db = require('../../data/connection')

function allUsers(){
    return db('users')
}

function getUser(id){
    return db('users')
    .where('id', id)
}

module.exports = {
    allUsers,
    getUser
}