const express = require("express");
const router = express.Router();
const { OrderSchema } = require("../DBgenerator/ordersDB.js");
const { BookSchema } = require("../DBgenerator/booksDB.js");

router.get("/orders/get/:id", async (req, res) => {
  const all = await OrderSchema.findByPk(req.params.id);
  res.send(all);
});

router.post("/orders/add", async (req, res) => {
  mybookid = req.query.bookid;
  const mybook = await BookSchema.findByPk(mybookid);
  if (mybook == null) {
    res.send("Brak takiej ksiazki");
  } else {
    const created = await OrderSchema.create({
      bookid: mybookid,
      number: req.query.number,
    });
    //res.send(created.id);
    res.send("Dodano");
  }
});

router.delete("/orders/delete/:id", async (req, res) => {
  const order = await OrderSchema.findByPk(req.params.id);
  order.destroy();
  res.send("usunieto");
});

router.patch("/orders/patch/:id", async (req, res) => {
  const order = await OrderSchema.findByPk(req.params.id);
  order.number = req.query.number;
  res.send("Dokonano zmiany");
});

module.exports = router;
