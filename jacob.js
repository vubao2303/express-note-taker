var express = require("express");
var path = require("path")

// set up express
var app = express();
var PORT = process.env.PORT || 6000;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

// save notes array 
// var savedNotes =[];
var router = require("express").Router();
var store = require("./store");

router.get("/notes",(req, res)=>{
  store
  .getNotes()
  .then((notes)=> res.json(notes))
  .catch ((err)=> res.status (500).json(err))
});

router.post( "/notes",(req, res)=>{
  store
  .addNote(req.body)
  .then((notes)=> res.json(note))
  .catch ((err)=> res.status (500).json(err))
});



router.delete("/notes/:id", (req, res) => {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

var path = require ("path")

// "/notes" responds with the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
// All other routes respond with the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});






app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// practice 

// third try 
// Dependencies
// =============================================================
// const express = require("express");
// const fs = require("fs");


// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 2600


// // Sets up the Express app to handle data parsing
// // =============================================================
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use("/assets", express.static("./assets"));


// require("./routes/htmlappRoutes")(app);
// require("./routes/apiRoutes")(app);

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
// });


// FOURTH TRY 
// 
// 
// 
// 1. Dependencies
// var express = require("express");
// var fs = require("fs");
// // 2. I'm creating an 'express' server called app
// var app = express();

// // 3. Sets a port or run at 7000, Later listener will listen this
// var PORT = process.env.PORT || 2700;

// //4. Use a middleware to parse the JSON data
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());
// //what folder the browser can see
// app.use(express.static("./public"));

// //5. Bring routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlappRoutes")(app);

// //6. Listener
// app.listen(PORT, function() {
//     console.log("App listening on PORT: " + PORT);
// });