/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('order_details').del(); // Adjust the table name
  await knex('order_details').insert([
    {id: 1, order_id: 1, product_id: 1, quantity: 2, price: 10.00},
    {id: 2, order_id: 1, product_id: 2, quantity: 1, price: 20.00},
    {id: 3, order_id: 2, product_id: 3, quantity: 5, price: 15.00}
  ]);
};
