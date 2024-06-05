const mysqlDb = require('./mysql');
const postgresDb = require('./postgres');

async function migrateTable(tableName, uniqueColumns) {
  try {
    const data = await mysqlDb(tableName).select('*');
    console.log(`Data fetched from ${tableName}:`, data);

    for (const row of data) {
      const columns = Object.keys(row);
      const values = columns.map(col => row[col]);

      const updateClause = columns
        .map(col => `${col} = EXCLUDED.${col}`)
        .join(', ');

      await postgresDb.raw(
        `INSERT INTO ${tableName} (${columns.join(', ')})
         VALUES (${values.map((_, i) => `$${i + 1}`).join(', ')})
         ON CONFLICT (${uniqueColumns.join(', ')})
         DO UPDATE SET ${updateClause};`,
        values
      );
    }

    console.log(`Data inserted into ${tableName}`);
  } catch (error) {
    console.error(`Error migrating table ${tableName}:`, error);
  }
}

async function migrate() {
  await migrateTable('customers', ['id']);
  await migrateTable('products', ['id']);
  await migrateTable('orders', ['id']);
  await migrateTable('order_details', ['id']);

  await mysqlDb.destroy();
  await postgresDb.destroy();
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
