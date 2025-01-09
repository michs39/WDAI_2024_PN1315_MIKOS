const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "sqlite",
  operatorsAliases: false,
  storage: "./data/users.sqlite",
});

const UserSchema = sequelize.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {}
);

module.exports = { sequelize, UserSchema };
