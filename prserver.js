// dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 2400;



app.use(express.urlencoded({extended: true}));
app.use(express.json());

//need to use all the files in public so add 
// serve static files such as images, CSS files, and JavaScript files,
//  use the express.static built-in middleware function in Express.
app.use(express.static('public'));

// These data sources hold arrays of information on notes
// const noteData = require('./db/db.json');



// // html Routes
// // when I give the local host a / it will send INDEX.html file  as a response 
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, './public/index.html'));
// });

// // when I give the local host a /notes, it will send Notes as a response 
// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
// });
// done with htmlROutes 

// start API ROUTES! this will need
// one get, one post, one delete (line 14,23, 31 in index.js)

// // display all NOTES api gets  
// get1 
// app.get("/api/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "./db/db.json"));
// });

// app.get("/api/notes", (req, res)=>{
//     return res.json(noteData)
//   })



// // get 2
// app.get('/api/notes', (req, res) => {
//     if (notesData.length > 0) {
//       for (let i = 0; i < notesData.length; i++) {
//         notesData[i].id = i + 1;
//       }
//     }
//     res.json(notesData);
//   });



// // Get 3 
// app.get("/api/notes", (req, res)=>{
//     return res.json(noteData)
// })
  
// app.get("/api/notes/:id", (req, res) => {
//     // console.log(req.params.id)
//     const id = req.params.id;
//     let found;
//     noteData.forEach(n => {
//       if (id == n.id){
//         found = n;
//         return res.json(n)
//       }
//     })
//     return res.json(false)
//   })




// // post notes when clicked the save buttons
// // req.body property contains key-value pairs of data submitted in the request body.
// // post 1
// app.post("/api/notes", function(req, res) {
//     // go to db, chia cái mà doc dc o do ra 
//     let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//     // cai req.body này là user input ( bao gom title and note text)
//     let newNote = req.body;
//     console.log(newNote)
//     // neu lam giong bai tap 
//     let uniqueID = (savedNotes.length).toString();
//     newNote.id = uniqueID;
//     savedNotes.push(newNote);

//     fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
//     console.log("Note saved to db.json. Content: ", newNote);
//     res.json(savedNotes);
// })

// // post 2 

// app.post('/notes', (req, res) => {
//     const newNote = req.body;
//     let noteID = noteData.length + 1;
  
//     newNote.id = noteID;
  
//     noteData.push(newNote);
  
//     fs.writeFile(
//       path.join(__dirname, '../db/db.json'),
//       JSON.stringify(noteData),
//       err => {
//         if (err) throw err;
//       }
//     );
  
//     res.json(newNote);
//   });

// //   post 3 
// app.post("/api/notes", (req, res) => {
//     const newNote = req.body;
//     if (notes.length === 0){
//       newNote.id = 1
//     } else {
//       newNote.id = (notes[notes.length-1].id + 1);
//     }
//     notes.push(newNote);
//     let jsonNotes = JSON.stringify(notes)
//     fs.writeFile("./db/db.json", jsonNotes, function(err) {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Success!");
//     })
//     res.json(true)
//   })




// //  DETELTE 1
// // app.delete("/api/notes/:id", function(req, res) {
// //     let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
// //     let noteID = req.params.id;
// //     let newID = 0;
// //     console.log(`Deleting note with ID ${noteID}`);
// //     savedNotes = savedNotes.filter(currNote => {
// //         return currNote.id != noteID;
// //     })
    
// //     for (currNote of savedNotes) {
// //         currNote.id = newID.toString();
// //         newID++;
// //     }

// //     fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
// //     res.json(savedNotes);
// // })

// // delelte 2 
// app.delete('/notes/:id', (req, res) => {
//     const id = req.params.id;
  
//     noteData.splice(
//       noteData.findIndex(note => note.id.toString() === id),
//       1
//     );
  
//     fs.writeFile(
//       path.join(__dirname, '../db/db.json'),
//       JSON.stringify(noteData),
//       err => {
//         if (err) throw err;
//       }
//     );
  
//     res.json(noteData);
//   });
  

// // detele 3
// app.delete("/api/notes/:id", (req, res) => {
//     const id = req.params.id;
//     let found;
//     notes.forEach((n, index) => {
//       if(id == n.id){
//         notes.splice(index,1)
//         const notesCopy = notes.slice();
//         let jsonNotes = JSON.stringify(notesCopy)
//         fs.writeFile("./db/db.json", jsonNotes, function(err) {
//           if (err) {
//             return console.log(err);
//           }
//           console.log("Success!");
//         })

//       }
//     })
//     res.json(true);
//   })




// // // =============================================================================
// // LISTENER
// // The below code effectively "starts" our server
// // =============================================================================
app.listen(port, function() {
    console.log(`Now listening to port ${port}.`);
})


// oh my gosh, why am I doing this to myself? B FOCUS B 
// stop being so sturbon and use the folders! 
// breath! 



// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const port = 4040;
// const mainDir = path.join(__dirname, "/public");

// app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());


// app.get("*", function(req, res) {
//   res.sendFile(path.join(mainDir, "index.html"));
// });

// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(mainDir, "notes.html"));
// });

// app.get("/api/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "/db/db.json"));
// });

// app.get("/api/notes/:id", function(req, res) {
//     let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//     res.json(savedNotes[Number(req.params.id)]);
// });

// app.post("/api/notes", function(req, res) {
//     let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//     let newNote = req.body;
//     let uniqueID = (savedNotes.length).toString();
//     newNote.id = uniqueID;
//     savedNotes.push(newNote);

//     fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
//     console.log("Note saved to db.json. Content: ", newNote);
//     res.json(savedNotes);
// })

// app.delete("/api/notes/:id", function(req, res) {
//     let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//     let noteID = req.params.id;
//     let newID = 0;
//     console.log(`Deleting note with ID ${noteID}`);
//     savedNotes = savedNotes.filter(currNote => {
//         return currNote.id != noteID;
//     })
    
//     for (currNote of savedNotes) {
//         currNote.id = newID.toString();
//         newID++;
//     }

//     fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
//     res.json(savedNotes);
// })

// app.listen(port, function() {
//     console.log(`Now listening to port ${port}. Enjoy your stay!`);
// })

const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 2300;

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

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

        for (let i = 0; i < db.length; i++)
        {
            const newNote = {
                title: db[i].title,
                text: db[i].text,
                id: i
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

        for(let i = 0; i < db.length; i++)
        {
            if (i !== id)
            {
                const newNote = {
                    title: db[i].title,
                    text: db[i].text,
                    id: newNoteList.length
                };

                newNoteList.push(newNote);
            }
        }

        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(newNoteList, null, 2), (err) => {
            if (err) throw err;
            res.json(req.body);
        });
    });
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}.`);
})