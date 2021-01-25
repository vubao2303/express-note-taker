// var express = require("express");
// var path = require("path")

// // set up express
// var app = express();
// var PORT = process.env.PORT || 2300;

// // handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // save notes array 
// // var savedNotes =[];
// const router = require("express").Router();
// const store = require("../db/store");


// // ================================================================================
// // ROUTER
// // The below points our server to a series of "route" files.
// // These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// // ================================================================================

// // require("./routes/apiRoutes")(app);

// // require("./routes/htmlappRoutes")(app);


// // const router = require("express").Router();
// // const store = require("../db/store");




// // maybe you are trying to do this route by itself, but if you want to do this in here let's try this 
// // WRITE IT HERE SO I DONT HAVE TO JUMP BACK AND FORTH, BUT I HAVE THIS IN HTMLROUTES 
// // html Routes
// // when I give the local host a / it will send me INDEX as a response 
// app.get("/", (req, res)=>{
//   res.sendFile(path.join(__dirname, "./public/index.html"))
// })


// // when I give the local host a /note, it will send Notes as a response 
// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/notes.html"))
// })
// // END HTMLROUTES 

// // this is API ROUTES 
// // display all NOTES 
// app.get("/api/notes", (req, res)=>{
//   return res.json(notes)
// })
// // write notes and save it 


// // need to 
































//  // API POST Requests
//  app.post("/api/notes/:new", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newNotes = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newNotes.title = newNotes.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newSaved);

//   savedNotes.push(newSaved);
//   res.json(newcharacter);
// });
// // DELETE NOTES

// // api/delete/NOTES
// app.delete("/api/delete/notes", function(req, res) {
//   var index = req.body.index;
//   var temp = [];
//   for (var i = 0; i < savedNotes.length; i++) {
//       if (i !== parseInt(index)) {
//         temp.push(saveNotes[i]);
//       }
//   }
//   notes = temp;
//   res.send("notes removed")
// })








// // =============================================================================
// // LISTENER
// // The below code effectively "starts" our server
// // =============================================================================

// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });
