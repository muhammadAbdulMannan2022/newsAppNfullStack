import express from "express";
import * as categories from "./data/categories.json" assert { type: "json" };
import * as news from "./data/news.json" assert { type: "json" };
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.listen(port, () => {
  console.log("Server listening on port " + port + " !");
  console.log(`http://localhost:${port}/`);
});
