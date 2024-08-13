/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('producto', table => {
        /*AQUI SE PONEN LOS CAMPOS*/
        table.increments('id').primary();
        table.string('nombre').notNullable();
        table.string('apellido').notNullable();
        table.string('email').unique().notNullable();
        table.string('telefono').notNullable();
        table.timestamps(true, true);
      });  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('producto');
};
