const User = require("./Model/user");
const Product = require("./Model/product");
const express = require("express");
require("./db/index");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/signup", async function (req, res) {
  await User.init();
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
  console.log(req.body);
  res.send({
    status: "ok",
  });
});

app.post("/signin", function (req, res) {
  console.log(req.body);
  res.send({
    status: "ok",
  });
});

app.post("/product", async function (req, res) {
  await Product.init();
  const item = new Product(req.body);

  try {
    await item.save();
    res.status(201).send(item);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("port 3000");
});
