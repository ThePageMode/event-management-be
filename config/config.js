module.exports = {
  development: {
    username: "root",
    password: "fauza2023",
    database: "db_mytix",
    host: "127.0.0.1",
    dialect: "mysql",
     dialectOptions: {
      useUtc: false,
    },
    timezone: "+07:00",

  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
