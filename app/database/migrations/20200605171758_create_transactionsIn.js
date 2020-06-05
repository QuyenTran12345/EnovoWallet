exports.up = knex =>
  knex.schema.createTable('transactionsIn', table => {
    table.increments('id').primary();
    table.double('payment');
    table.string('notes');
    table.integer('userId');
    table
      .foreign('userId')
      .references('users.id')
      .onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema.dropTableIfExists('transactionsIn');