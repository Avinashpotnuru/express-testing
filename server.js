const express = require("express");

const mongoose = require("mongoose");

const app = express();

const products = [
  {
    id: 1,
    name: "oreo",
  },
  {
    id: 2,
    name: "lays",
  },
  {
    id: 3,
    name: "5 star",
  },
  {
    id: 4,
    name: "kit-kat",
  },
  {
    id: 5,
    name: "milky bar",
  },
  {
    id: 7,
    name: "polo",
  },
  {
    id: 8,
    name: "munch",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>welcome to cart</h1>");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const filterProduct = products.find((item) => item.id == req.params.id);
  res.send(filterProduct);
});

app.get("/:name", (req, res) => {
  if (req.params.name) {
    res.send(`<h1>hai welcome to our page  ${req.params.name}</h1>`);
  }
});

app.listen(3000, () => {
  console.log("server is started");
});
