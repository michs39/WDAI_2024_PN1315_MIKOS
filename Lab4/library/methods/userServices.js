const express = require("express");
const router = express.Router();
const { UserSchema } = require("../DBgenerator/usersDB.js");

router.post("/register", async (req, res) => {
  const created = await UserSchema.create({
    email: req.query.email,
    password: req.query.password,
  });
  res.send(created.id);
});

router.post("/login", async (req, res) => {
  myemail = req.query.email;
  mypassword = req.query.password;
  const user = UserSchema.findOne({ where: { email: myemail } });
  if (user && user.password == mypassword) {
    res.send("Logged in");
  } else {
    res.send("Wrong email or password");
  }
});

module.exports = router;
