exports.seed = function (knex) {
  return knex("userchats")
    .truncate()
    .then(function () {
      return knex("userchats").insert([
        { userId: 1, chatId: 1 },
        { userId: 2, chatId: 1 },
        { userId: 1, chatId: 2 },
        { userId: 2, chatId: 2 },
      ]);
    });
};
