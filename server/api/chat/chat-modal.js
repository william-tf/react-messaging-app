const db = require('../../data/connection')

function getAllChats(){
    return db('chat')
}

function getChat(id){
    return db('chat')
    .where({id})
    .first()
}

function userChat(userid){
    return db('chat as c')
    .join('messages as m', 'm.id')
    .onIn('c.messages')
    .select('m.messageText')
    //.where('c.users', {userid})
}
//we want chatID that includes the specific users

module.exports = {
    getAllChats,
    getChat,
    userChat
}