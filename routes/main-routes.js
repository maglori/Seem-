var Users = require('../models/users.js');

module.exports = function (app) {
  app.get("/profile", function (req, res) {


    Users.findOne().exec(function (err, data) {
      if (err) {
        res.sendFile(__dirname + "../public/index.html");
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
            res.sendFile(__dirname + "../public/index.html");
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
        res.sendFile(__dirname + "../public/index.html", thisUser);
      }
    });
  });
};
