/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('order_details', function(table) {
        table.increments('id').primary();
        table.integer('order_id').unsigned().references('id').inTable('orders');
        table.integer('product_id').unsigned().references('id').inTable('products');
        table.integer('quantity');
        table.decimal('price', 10, 2);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('order_details');
};
