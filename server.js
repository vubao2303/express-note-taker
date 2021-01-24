var express = require("express");
var path = require("path")

// set up express
var app = express();
var PORT = process.env.PORT || 2300;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// save notes array 



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// maybe you are trying to do this route by itself, but if you want to do this in here let's try this 

// when I give the local host a / it will send me INDEX as a response 
app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "./public/index.html"))
})


// when I give the local host a /note, it will send Notes as a response 
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"))
})


























// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
