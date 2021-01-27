// // MAIN COURSE !
// var express = require("express");

// // set up express
// var app = express();
// var PORT = process.env.PORT || 2303;



// // handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



// app.use(express.static('public'));

// // ================================================================================
// // ROUTER

// require("routes/apiRoutes")(app);
// require("routes/htmlappRoutes")(app);

// // LISTENER
// // The below code effectively "starts" our server
// // =============================================================================

// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });

// IM very tired but let try this again 



// DEPENDENCIES
// // ====================================================
// const express = require('express');


// // SERVER CONFIGURATION
// // ====================================================
// // Create server
// const app = express();

// // Listen for port, or default.
// const PORT = process.env.PORT || 2303;

// // Body parsers.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Route to static folder.
// app.use(express.static('public'));


// // ROUTERS
// // ====================================================
// require("./routes/apiRoutes")(app); // Route to api.
// require("./routes/htmlappRoutes")(app); // Route to html.


// // // LISTENER
// // // The below code effectively "starts" our server
// // // =============================================================================

// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });


// all together because I don't know how to split them 
// DEPENDENCIES
// ====================================================
// const express = require('express');

// const path = require("path");
// const fs = require("fs");


// const app = express();

// // Listen for port, or default.
// const PORT = process.env.PORT || 2303;

// // Body parsers.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Route to static folder.
// app.use(express.static('public'));




// // ROUTERS
// // ====================================================
// // If no matching route is found default to home
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });
// //  when I give the local host a /notes, it will send Notes as a response 
// app.get("/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/notes.html"));
// });


// app.get("/api/notes", (req, res) => {
//   fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
//       if (err) throw err;
//       res.json(JSON.parse(data));
//   });
// });


// app.post("/api/notes", (req, res) => {
//   fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
//       if (err) throw err;
//       const db = JSON.parse(data);
//       const newNoteList = [];

//       db.push(req.body);

//       for (let i = 0; i < db.length; i++)
//       {
//           const newNote = {
//               title: db[i].title,
//               text: db[i].text,
//               id: i
//           };

//           newNoteList.push(newNote);
//       }

//       fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newNoteList, null, 2), (err) => {
//           if (err) throw err;
//           res.json(req.body);
//       });
//   });
// });

// app.delete("/api/notes/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
//       if (err) throw err;
//       const db = JSON.parse(data);
//       const newNoteList = [];

//       for(let i = 0; i < db.length; i++)
//       {
//           if (i !== id)
//           {
//               const newNote = {
//                   title: db[i].title,
//                   text: db[i].text,
//                   id: newNoteList.length
//               };

//               newNoteList.push(newNote);
//           }
//       }

//       fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newNoteList, null, 2), (err) => {
//           if (err) throw err;
//           res.json(req.body);
//       });
//   });
// });





// // // LISTENER
// // // The below code effectively "starts" our server
// // // =============================================================================

// app.listen(PORT, function() {
//   console.log("App listening on PORT: " + PORT);
// });

// 
// 
// 
// // DEPENDENCIES
// ====================================================
const express = require('express');

const path = require("path");
const fs = require("fs");


const app = express();

// Listen for port, or default.
const PORT = process.env.PORT || 2303;

// Body parsers.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to static folder.
app.use(express.static('public'));



// ROUTERS
// ====================================================
// If no matching route is found default to home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
//  when I give the local host a /notes, it will send Notes as a response 
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});


app.post("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    const db = JSON.parse(data);
    const newNoteList = [];
    db.push(req.body);
    for (let i = 0; i < db.length; i++) {
      const newNote = {
        title: db[i].title,
        text: db[i].text,
        id: i+1
      };
      newNoteList.push(newNote);
    }
    fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newNoteList, null, 2), (err) => {
      if (err) throw err;
      res.json(req.body);
    });
  });
});

app.delete("/api/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    const db = JSON.parse(data);
    const newNoteList = [];
    let w =1 
    for (let i = 0; i < db.length; i++) {
      if (i !== id-1) {
        const newNote = {
          title: db[i].title,
          text: db[i].text,
          id: w
        };
        w++
        newNoteList.push(newNote);
      }
    }
    fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newNoteList, null, 2), (err) => {
      if (err) throw err;
      res.json(req.body);
    });
  });
});

// // LISTENER
// // The below code effectively "starts" our server
// // =============================================================================

app.listen(PORT, function () {
  console.log("App listening on this special PORT: " + PORT + " Have fun!");
});