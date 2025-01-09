const express = require("express");
const indexRouter = require("./methods/userServices.js");
const app = express();
const port = 3000;
const { sequelize, UserSchema } = require("./DBgenerator/usersDB.js");

UserSchema.drop();

const atSync = async () => {
  await console.log("Start atsync");
  await sequelize
    .sync()
    .then(async function () {
      await UserSchema.create({
        email: "email@wp.pl",
        password: "qwerty",
      });
      console.log("connected to database");
    })
    .catch(function (err) {
      console.log(err);
    });
};
setTimeout(() => {
  atSync();
}, 1000);

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
