module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
        database: `${process.env.DATABASE_NAME}`,
        username: `${process.env.DATABASE_USERNAME}`,
        password: `${process.env.DATABASE_PASSWORD}`,
      },
      options: {
        strict: true,
      },
    },
  },
});
