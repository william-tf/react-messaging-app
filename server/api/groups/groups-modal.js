const db = require('../../data/connection')


function allGroups(){
    return db('group')
}

function groupMessages(id){
    return db('group as g')
    .join('messages as m', 'm.group', '=', 'g.id')
    .select("m.messageText")
    .where('g.id', id)
}


module.exports = {
    allGroups,
    groupMessages
}