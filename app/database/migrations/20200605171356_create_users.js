exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('username', 191).unique();
    table.string('password');
    table.string('email');
    table.string('phone');
    table.string('address');
    table.string('avatar');
    table.integer('loyalpoint');
    table.double('accountBalance');
    table.boolean('status').defaultTo(true);
    table.integer('roleId');
    table
      .foreign('roleId')
      .references('roles.id')
      .onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.string('createdBy');
    table.string('updatedBy');

  });

exports.down = knex => knex.schema.dropTableIfExists('users');
