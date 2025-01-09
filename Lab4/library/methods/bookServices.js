const express = require("express");
const router = express.Router();
const { BookSchema } = require("../DBgenerator/booksDB.js");

router.get("/books", async (req, res) => {
  const all = await BookSchema.findAll();
  res.send(all);
});

router.get("/books/get/:id", async (req, res) => {
  const book = await BookSchema.findByPk(req.params.id);
  res.send(book);
});

router.post("/books/add", async (req, res) => {
  const created = await BookSchema.create({
    title: req.query.title,
    author: req.query.author,
    year: req.query.year,
  });
  //newid = created.id;
  //res.send(newid);
  res.send("dodano");
});

router.delete("/books/delete/:id", async (req, res) => {
  const book = await BookSchema.findByPk(req.params.id);
  book.destroy();
  res.send("usunieto");
});

module.exports = router;
