exports.up = knex =>
  knex.schema.createTable('roles', table => {
    table.increments('id').primary();
    table
      .string('name')
      .notNullable()
      .unique();
    table.string('description');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema.dropTableIfExists('roles');