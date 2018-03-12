var orm = require("../config/orm.js");

var table = "burger";
var burger = {
  
  selectAll: function(cb) {
    orm.selectAll(table, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne(table, cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne(table, objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete(table, condition, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;