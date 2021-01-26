// // short codes with no commment 
// const path = require('path');
// const publicFolder = path.join(__dirname, '../public')

// module.exports = function(app) {

//   app.get("/notes", function(req, res) {
//     res.sendFile(path.join(publicFolder, 'notes.html'));
// });

//   app.get("*", function(req, res) {
//   res.sendFile(path.join(publicFolder, 'index.html'));
// });

// };


// MAIN COURSE 
// const path = require('path');
// const publicFolder = path.join(__dirname, '../public')
// module.exports = function(app) {
// // HTML GET Requests
// // Below code handles when users "visit" a page.
// // In each of the below cases the user is shown an HTML page of content
// // ---------------------------------------------------------------------------

// // If no matching route is found default to home
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(publicFolder, 'index.html'));
//   });

//   // // when I give the local host a /notes, it will send Notes as a response 
//   app.get("/notes", function(req, res) {
//     res.sendFile(path.join(publicFolder, 'notes.html'));
//   });
// };


// same thing but this time I type out the whole path 

// DEPENDENCIES
// ====================================================
var path = require("path");


// ROUTING
// ====================================================
module.exports = function(app) {
  // Route HTML GET requests to pages.
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  });
  // Default route if no matches.
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });
}

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/notes.html"));
// });
