/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('customers', function(table) {
            table.increments('id').primary();
            table.string('first_name');
            table.string('last_name');
            table.string('email').unique();
            table.string('phone');
            table.text('address');
            table.string('city');
            table.string('state');
            table.string('zip_code');
        })
        .then(() => {
            return knex.schema.createTable('products', function(table) {
                table.increments('id').primary();
                table.string('name');
                table.text('description');
                table.decimal('price', 10, 2);
                table.integer('stock');
            });
        })
        .then(() => {
            return knex.schema.createTable('orders', function(table) {
                table.increments('id').primary();
                table.integer('customer_id').unsigned().references('id').inTable('customers');
                table.date('order_date');
                table.string('status');
                table.decimal('total', 10, 2);
            });
        })
        .then(() => {
            return knex.schema.createTable('order_details', function(table) {
                table.increments('id').primary();
                table.integer('order_id').unsigned().references('id').inTable('orders');
                table.integer('product_id').unsigned().references('id').inTable('products');
                table.integer('quantity');
                table.decimal('price', 10, 2);
            });
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('order_details')
        .then(() => {
            return knex.schema.dropTable('orders');
        })
        .then(() => {
            return knex.schema.dropTable('products');
        })
        .then(() => {
            return knex.schema.dropTable('customers');
        });
};

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.up = function(knex) {
//     return knex.schema.createTable('customers', function(table) {
//         table.increments('id').primary();
//         table.string('first_name');
//         table.string('last_name');
//         table.string('email').unique();
//         table.string('phone');
//         table.text('address');
//         table.string('city');
//         table.string('state');
//         table.string('zip_code');
//     });
// };

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// exports.down = function(knex) {
//     return knex.schema.dropTable('customers');
// };
