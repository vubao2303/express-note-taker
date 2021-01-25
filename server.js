// MAIN COURSE !
var express = require("express");

// set up express
var app = express();
var PORT = process.env.PORT || 2303;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER

// require("./routes/apiRoutes")(app);
require("./routes/htmlappRoutes")(app);

// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
