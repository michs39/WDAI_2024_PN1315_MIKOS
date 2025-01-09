const express = require("express");
const indexRouter = require("./methods/bookServices.js");
const app = express();
const port = 3000;
const { sequelize, BookSchema } = require("./DBgenerator/booksDB.js");

BookSchema.drop();

const atSync = async () => {
  await console.log("Start atsync");
  await sequelize
    .sync()
    .then(async function () {
      await BookSchema.create({
        title: "Typical Book",
        author: "Typical Author",
        year: 2012,
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
