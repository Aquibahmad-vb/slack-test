const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const db = mongoose.connection;
// import App from './app';

const router = require("./routes");
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.use(router);

app.listen(port, () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/test");
    db.on("error", () => console.log(`Database connection error`));
    db.once("open", function () {
      console.log("Mongodb connected.");
    });
  } catch (error) {
    console.log(`someting went worng ${error}`);
  }
  console.log(`Example app listening on ${port} port!`);
});


