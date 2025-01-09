const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "sqlite",
  operatorsAliases: 0,
  storage: "./data/orders.sqlite",
});

const OrderSchema = sequelize.define(
  "Order",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    bookid: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
  },
  {}
);

module.exports = { sequelize, OrderSchema };
