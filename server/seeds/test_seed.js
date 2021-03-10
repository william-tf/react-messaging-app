
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'test', password: 'testing123', email:"test@gmail.com", firstName: 'first', lastName: 'last', profilePic: ''},
        {id: 2, username: 'teste', password: 'testing12e3', email:"teset@gmail.com", firstName: 'first', lastName: 'last', profilePic: ''}
      ]);
    });
};
