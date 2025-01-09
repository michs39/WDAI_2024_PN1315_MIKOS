const express = require("express");
const indexRouter = require("./src/routes.js");
const app = express();
const port = 3000;
const { sequelize, PersonSchema } = require("./src/db.js");

PersonSchema.drop();

const atSync = async () => {
  await console.log("Start atsync");
  await sequelize
    .sync()
    .then(async function () {
      await PersonSchema.create({ name: "john", surname: "Doe", job: "IT" });
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
