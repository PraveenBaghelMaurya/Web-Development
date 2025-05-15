const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

const JSON_SECRET_KEY = "Praveen baghel from @#$";

router.get("/auth", (req, res) => {
  //creating token
  var token = jwt.sign(
    { name: "Praveen", password: "qwerty123456789" },
    JSON_SECRET_KEY
  );
  res.send(token);
});

router.get("/verify", (req, res) => {
//   let token = 'Abhi dhoondh rhey hai';
  // console.log(req.headers.authorization.split(' ')[1])
  token = req.headers.authorization.split(" ")[1];
//   res.send(token);

  jwt.verify(token, JSON_SECRET_KEY, function (err, userData) {
    if (err)
      return res.json({
        message: "Not a valid token",
      });

    res.json({
      message: "Welcome again",
      userData,
    });
  });
});

module.exports = router;
//token

