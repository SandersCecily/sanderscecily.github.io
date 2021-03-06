// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const data = require("../assets/projects.json");

// Routes
// =============================================================
module.exports = function(app) {
  // index route loads index
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // about loads about
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../about.html"));
  });

  // projects loads projects
  app.get("/projects", function(req, res) {
    res.sendFile(path.join(__dirname, "../projects.html"));
  });

  // loads the json data 
  app.get("/json", function(req, res) {
    res.json(data);
  });

};
