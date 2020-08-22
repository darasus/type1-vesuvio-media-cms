module.exports = ({ env }) => ({
  host: `${process.env.HOST}`,
  port: `${process.env.PORT || 5000}`,
  production: true,
  proxy: {
    enabled: false,
  },
  cron: {
    enabled: false,
  },
  admin: {
    autoOpen: false,
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
