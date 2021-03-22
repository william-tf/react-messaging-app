exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("id");
      tbl.string("username").unique().notNullable(),
        tbl.string("password", 8).notNullable(),
        tbl.string("email").unique().notNullable(),
        tbl.string("firstName").notNullable(),
        tbl.string("lastName").notNullable(),
        tbl.string("profilePic"),
        tbl.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("userchats", (tbl) => {
      tbl.integer("userId").unsigned().references("id").inTable("user"),
      // tbl.integer("userId2").unsigned().references('id').inTable('user')
        tbl.integer("chatId").unsigned().references("id").inTable("chat");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("messages", (tbl) => {
      tbl.increments("id");
      tbl.integer("userId").unsigned().references("id").inTable("users");
      tbl.string("messageText").notNullable();
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
      tbl
        .integer("chatId")
        .unsigned()
        .references("id")
        .inTable("chat")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("chat", (tbl) => {
      tbl.increments("id");
      tbl.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
