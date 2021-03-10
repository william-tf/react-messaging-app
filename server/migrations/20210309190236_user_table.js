
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments('id')
      tbl.string('username').unique().notNullable(),
      tbl.string('password', 8).notNullable(),
      tbl.string('email').unique().notNullable(),
      tbl.string('firstName').notNullable(),
      tbl.string('lastName').notNullable(),
      tbl.string('profilePic'),
      tbl.specificType('messageid', 'int ARRAY')
      .unsigned()
      .references('messageid').inTable('messages')
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
      tbl.specificType('groups', "int ARRAY")
      .unsigned()
      .references('id').inTable('group')
      .onDelete('CASCADE').onUpdate('CASCADE')
  })
  .createTable('group', tbl => {
      tbl.increments('id'),
      tbl.integer('admin')
      .unsigned()
      .references('id').inTable('user')
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
      tbl.specificType('messages', 'int ARRAY')
      .unsigned()
      .references('id').inTable('messages')
      .onDelete('CASCADE').onUpdate('CASCADE')
  })
  .createTable('messages', tbl => {
      tbl.increments("id")
      tbl.integer('userId')
      .unsigned()
      .references('id').inTable('users')
      tbl.string('messageText').notNullable()
      tbl.timestamp('created_at').defaultTo(knex.fn.now())
      tbl.integer('group').defaultTo(0)
      .unsigned()
      .references('id').inTable('group')
      .onDelete('CASCADE').onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
