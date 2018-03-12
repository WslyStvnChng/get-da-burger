var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var port = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static("assets"));
app.use(express.static("css"));
app.use(express.static("js"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var router = require("./controllers/burgers_controller.js");

app.use('/', router);

app.listen(port, function() {
  console.log("listening to port " + port);
});