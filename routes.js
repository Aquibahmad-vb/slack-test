const express = require("express");

const Router = express.Router();

const {
  storeUser,
  getUsers,
  
} = require("./controller/userControoler");

Router.get("/users", getUsers);
Router.post("/users", storeUser);

module.exports = Router;
