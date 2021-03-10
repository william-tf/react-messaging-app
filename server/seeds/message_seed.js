
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, messageText:"1st message test", userId: 1, group: 0},
        {id: 2, messageText:"2nd message test", userId: 1, group: 1},
        {id: 3, messageText:"3rd message test", userId: 2, group: 0},
        {id: 4, messageText:"4th message test", userId: 1, group: 1}
      ]);
    });
};
