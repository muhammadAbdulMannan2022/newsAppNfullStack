// import express from "express";
// import * as categories from "./data/categories.json" assert { type: "json" };
// import * as news from "./data/news.json" assert { type: "json" };
// import cors from "cors";

const express = require("express");
const categories = require("./data/categories.json");
const news = require("./data/news.json");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "0") {
    res.send(news);
  } else {
    const newsByCategory = news.filter((n) => n.category_id === id);
    res.send(newsByCategory);
  }
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const theNews = news.find((n) => n._id === id);
  res.send(theNews);
});
app.listen(port, () => {
  console.log("Server listening on port " + port + " !");
});
