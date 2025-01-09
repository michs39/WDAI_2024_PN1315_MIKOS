const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "sqlite",
  operatorsAliases: 0,
  storage: "./data/books.sqlite",
});

const BookSchema = sequelize.define(
  "Book",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
  },
  {}
);

module.exports = { sequelize, BookSchema };
