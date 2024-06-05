/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('orders').del(); // Adjust the table name
  await knex('orders').insert([
    {id: 1, customer_id: 1, order_date: '2024-06-01', status: 'shipped', total: 50.00},
    {id: 2, customer_id: 2, order_date: '2024-06-02', status: 'pending', total: 75.00},
    {id: 3, customer_id: 3, order_date: '2024-06-03', status: 'delivered', total: 100.00}
  ]);
};
