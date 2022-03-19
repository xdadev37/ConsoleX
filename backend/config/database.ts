export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ConsoleX'),
      user: env('DATABASE_USERNAME', 'su'),
      password: env('DATABASE_PASSWORD', '4696048pouria'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
