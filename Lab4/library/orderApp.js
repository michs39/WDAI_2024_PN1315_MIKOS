const express = require("express");
const indexRouter = require("./methods/orderServices.js");
const app = express();
const port = 3000;
const { sequelize, OrderSchema } = require("./DBgenerator/ordersDB.js");

OrderSchema.drop();

const atSync = async () => {
  await console.log("Start atsync");
  await sequelize
    .sync()
    .then(async function () {
      await OrderSchema.create({
        bookid: 1,
        number: 5,
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
