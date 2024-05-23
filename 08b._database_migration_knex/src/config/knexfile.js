module.exports = {
    mysql: {
      client: 'mysql2',
      connection: {
        host: 'your-mysql-host',
        user: 'your-mysql-user',
        password: 'your-mysql-password',
        database: 'your-mysql-database'
      }
    },
    postgres: {
      client: 'pg',
      connection: {
        host: 'your-postgres-host',
        user: 'your-postgres-user',
        password: 'your-postgres-password',
        database: 'your-postgres-database'
      }
    }
  };
  