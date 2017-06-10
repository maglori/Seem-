// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var mainRoutes = require("./routes/main-routes.js")
var Users = require("./models/users.js");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3001;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Connect to Mongo 
mongoose.connect("mongodb://localhost/seeme");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// This will redirect the user to our rendered React application
// var mainRoute = require('./routes/main-routes.js')(app);
// temporarily plaes in server.js because there is an error trying to call this route (with the above line 37 code)
// cannot recognize path when going one directory up using "../", out of routes and into public
 app.get("/profile", function (req, res) {


    Users.findOne().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.sendFile(__dirname + "/public/index.html");
      }
      if (data === null) {
        Users.create({
          first_name: req.body.location,
          date: Date.now()
        }, function (err) {
          if (err) {
            console.log(err);
          }
          else {
            res.sendFile(__dirname + "/public/index.html");
          }
        });
      } else {
        var thisUser = {
          first_name: data.first_name,
          last_inital: data.last_inital,
          email: data.email,
          location: data.location,
          looks: data.looks
        };
        res.sendFile(__dirname + "/public/index.html", thisUser);
      }
    });
  });

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
