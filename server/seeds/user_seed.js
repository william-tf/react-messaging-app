
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'test1', password: 'testing123', email:"test1@gmail.com", firstName: 'Seth', lastName: 'Bradshaw', profilePic: ''},
        {id: 2, username: 'test2', password: 'testing12e3', email:"test2@gmail.com", firstName: 'William', lastName: 'Fletcher', profilePic: ''},
        {id: 3, username: 'test3', password: 'testing12e3', email:"test3@gmail.com", firstName: 'Chris', lastName: 'Girvin', profilePic: ''},
        {id: 4, username: 'test4', password: 'testing12e3', email:"test4@gmail.com", firstName: 'David', lastName: 'Chang', profilePic: 'https://images.unsplash.com/photo-1523215108660-3fdf7932d7a5?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1345&q=80'},
        {id: 5, username: 'test5', password: 'testing12e3', email:"test5@gmail.com", firstName: 'Josh', lastName: 'Cortana', profilePic: ''},
        {id: 6, username: 'test6', password: 'testing12e3', email:"test6@gmail.com", firstName: 'Steven', lastName: 'Android', profilePic: ''},
        {id: 7, username: 'test7', password: 'testing12e3', email:"test7@gmail.com", firstName: 'Christian', lastName: 'Forsen', profilePic: ''},
        {id: 8, username: 'test8', password: 'testing12e3', email:"test8@gmail.com", firstName: 'Bob', lastName: 'Felix', profilePic: ''}
      ]);
    });
};
