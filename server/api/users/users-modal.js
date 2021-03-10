const db = require('../../data/connection')

function allUsers(){
    return db('users')
}

function getUser(id){
    return db('users')
    .where(id)
}

function addUser(user){
    return db('users').insert(user, "id")
}

function findUser(filter){
    return db('users').where(filter)
}

module.exports = {
    allUsers,
    getUser,
    addUser,
    findUser
}