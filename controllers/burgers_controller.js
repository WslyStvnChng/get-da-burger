var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
  burger.selectAll(function(data) {
    var allBurgersObj = {
      burgers: data
    }
    res.render("index", allBurgersObj);
  });
});

// router.get("/burgers", function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = { burgers: data };
//     res.render("index", hbsObject);
//   });
// });

router.post("/api/burgers", function(req, res) {
  var newBurgerName = req.body.name;

  burger.insertOne(["burger_name"], [newBurgerName], function(data) {
    res.json({ id: data.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  var newDevouredStatus = req.body.newDevouredStatus;

  burger.updateOne({ devoured: newDevouredStatus }, condition, function(data) {
    if (data.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;