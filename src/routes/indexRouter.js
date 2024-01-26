const express = require("express");
const indexRouter = express.Router();
const { onUsrSet } = require("./signupRouter");
indexRouter.get("/", function (req, res) {
  res.render("index", { message: "Choose an option" });
});
indexRouter.get("/success", (req, res) => {
  onUsrSet((usr) => {
    res.render("index",{ message: `Hello, ${usr}`})
  });
});
module.exports = indexRouter;
