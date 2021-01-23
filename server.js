var express = require("express");
var path = require("path")

// set up express
var app = express();
var PORT = process.env.PORT || 2300;

// handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());





// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);




// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
