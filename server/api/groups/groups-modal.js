const db = require('../../data/connection')


function allGroups(){
    return db('group')
}

module.exports = {
    allGroups
}