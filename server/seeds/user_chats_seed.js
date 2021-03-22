exports.seed = function (knex) {
  return knex("userchats")
    .truncate()
    .then(function () {
      return knex("userchats").insert([
        { userId: 1, chatId: 1 },
        { userId: 2, chatId: 1 },
        // { userId: 1, chatId: 2 },
        // { userId: 3, chatId: 2 },

        //construct rest of seed data as above
        // { userId: 1, userId2: 4, chatId: 3 },
        // { userId: 2, userId2: 5, chatId: 4 },
        // { userId: 2, userId2: 6, chatId: 5 },
        // { userId: 2, userId2: 7, chatId: 6 },
        // { userId: 3, userId2: 8, chatId: 7 },
        // { userId: 3, userId2: 2, chatId: 8 },
        // { userId: 3, userId2: 4, chatId: 9 },
        // { userId: 4, userId2: 5, chatId: 10 },
        // { userId: 4, userId2: 6, chatId: 11},
        // { userId: 4, userId2: 7, chatId: 12 },
        // { userId: 5, userId2: 8, chatId: 13 },
        // { userId: 5, userId2: 3, chatId: 14 },
        // { userId: 5, userId2: 4, chatId: 15 },
        // { userId: 6, userId2: 5, chatId: 16 },
        // { userId: 6, userId2: 7, chatId: 17 },
        // { userId: 6, userId2: 8, chatId: 18 },
        // { userId: 7, userId2: 3, chatId: 19 },
        // { userId: 7, userId2: 8, chatId: 20 },
        // { userId: 7, userId2: 5, chatId: 21 },
        // { userId: 8, userId2: 1, chatId: 22 },
        // { userId: 8, userId2: 4, chatId: 23 },
        // { userId: 8, userId2: 7, chatId: 24 },
      ]);
    });
};
