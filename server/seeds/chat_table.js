
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chat').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([
        {id: 1, users:[1, 2], messages:[2, 3]}
      ]);
    });
};
