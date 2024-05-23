const mysqlDb = require('./db/mysql');
const postgresDb = require('./db/postgres');

async function migrateTable(tableName) {
  const data = await mysqlDb(tableName).select('*');
  await postgresDb(tableName).insert(data);
}

async function migrate() {
  const tables = ['table1', 'table2', 'table3']; // Add your table names here

  for (const table of tables) {
    await migrateTable(table);
  }

  await mysqlDb.destroy();
  await postgresDb.destroy();
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
