
const testing = {
  id: 1
}


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('group').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('group').insert([
        {id: 1, admin:1, messages:[4, 2]},
      ]);
    });
};
