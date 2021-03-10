const db = require('../../data/connection')

function getAllChats(){
    return db('chat')
}

function getChat(id){
    return db('chat').where(id)
}

function userChat(userid){
    return db('chat as c')
    .join('users as u', 'c.users', '=', 'u.id')
    .select('*')
    .where('c.users', userid)
}

module.exports = {
    getAllChats,
    getChat,
    userChat
}