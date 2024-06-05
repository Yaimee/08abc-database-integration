/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('products').del(); // Adjust the table name
  await knex('products').insert([
    {id: 1, name: 'Product 1', description: 'Description 1', price: 10.00, stock: 100},
    {id: 2, name: 'Product 2', description: 'Description 2', price: 20.00, stock: 200},
    {id: 3, name: 'Product 3', description: 'Description 3', price: 30.00, stock: 300}
  ]);
};
