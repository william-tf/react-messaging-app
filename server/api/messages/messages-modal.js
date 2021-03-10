const db = require('../../data/connection')

function allMessages(){
    return db('messages')
}

function findByMsg(filter){
    return db('messages').where(filter);
  };

const findById = async (id) => {
    return db('messages').where({ id }).first('*');
  };

function createMsg(msg){
    return db('messages').insert(msg).returning("*")
}

function updateMsg(id, msg){
    return db('messages').where({id}).first().update(msg)
}
function delMsg(id){
    return db('messages').where({id}).del()
}

module.exports = {
    allMessages,
    findByMsg,
    createMsg,
    updateMsg,
    delMsg,
    findById
}