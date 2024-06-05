module.exports = {
    mysql: {
      client: 'mysql2',
      connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'superboy99',
        database: 'customers'
      }
    },
    postgres: {
      client: 'pg',
      connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'superboy99',
        database: 'postgres'
      }
    }
  };
  