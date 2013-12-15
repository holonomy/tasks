module.exports = {
  directory: __dirname + "/migrations",
  tableName: "db_migrations",
  database: {
    client: "sqlite3",
    connection: {
      filename: __dirname + "/../../db.sqlite",
    },
  },
};
