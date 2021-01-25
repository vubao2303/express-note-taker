// short codes with no commment 
const path = require('path');
const publicFolder = path.join(__dirname, '../public')

module.exports = function(app) {

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(publicFolder, 'notes.html'));
});

  app.get("*", function(req, res) {
  res.sendFile(path.join(publicFolder, 'index.html'));
});


};




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








// var path = require("path");

// module.exports = function(app){
// // when I give the local host a /note, it will send Notes as a response 
//   app.get("/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/notes.html"))
//   })
//   // when I give the local host a / OR * anything  it will send me INDEX as a response 
//   app.get("*", (req, res)=>{
//     res.sendFile(path.join(__dirname, "../public/index.html"))
//   })
// }




// third try routes 
// const path = require("path");

// module.exports = function(app) {
    
//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "/../public/index.html"));
//     });
    
//     app.get("/notes", function(req, res) {
//         res.sendFile(path.join(__dirname, "/../public/notes.html"));
//     });

    


// }


// fourth try 
// Path package to get the file path for the html
// var path = require("path");

// // Create a route
// // Basic routes that sends the user first to the AJAX page
// // Go get the html so that the user can see the page.

// module.exports = function(app) {

//     app.get("/notes", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/notes.html"));
//     });

//     app.get("*", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });

// };


