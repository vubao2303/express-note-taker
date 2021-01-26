// MAIN COURSE 
// Main Course 
// const noteData = require('../db/db.json');
// // ===============================================================================
// // ROUTING
// // start API ROUTES! this will need
// // one get, one post, one delete (line 14,23, 31 in index.js)
// // ===============================================================================
// const noteList = []


// module.exports = function(app) {
// // // Below code handles when users "visit" a page.
//   app.get("/api/notes", function(req, res){
    
//     res.json(noteData)
//   })

//   // API POST Requests
//   app.post("/api/notes", function(req, res) {
//     // req.body is available since we're using the body parsing middleware
//     let newNote= req.body 
//     console.log(newNote)
//     noteData.push(newNote);
//     res.json(newNote)
//   });

//   // API deletes specific notes 
//   app.delete("api/notes/:id", function(req, res) {
//     var  noteId = req.body.noteId;
//     var temp = [];
//     for(var i= 0; i < noteList.length; i ++ )
//     if (i !== parseInt(noteId)){
//       temp.push(noteList[i]);
//     }
//     noteList= temp;
//     res.send("note deleted")
//   });

// };



// var notes = require("../db/db.json")


// module.exports = function(app){
//   // var notes = require("../db/db.json")
// // display all NOTES 
// // API GET Requests
// // Below code handles when users "visit" a page.
//   app.get("/api/notes", (req, res)=>{
//     return res.json(notes)
//   })
// }

// 
// 
// 
// 
// 
// 

// third try routes 
// const fs = require("fs");
// var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));


// module.exports = function(app) {

//     app.get("/api/notes", function(req, res) {
       
//         res.json(data);

//     });

//     app.get("/api/notes/:id", function(req, res) {

//         res.json(data[Number(req.params.id)]);

//     });


//     app.post("/api/notes", function(req, res) {

//         let newNote = req.body;
//         let uniqueId = (data.length).toString();
//         console.log(uniqueId);
//         newNote.id = uniqueId;
//         data.push(newNote);
        
//         fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
//             if (err) throw (err);        
//         }); 

//         res.json(data);    

//     });

    
//     app.delete("/api/notes/:id", function(req, res) {

//         let noteId = req.params.id;
//         let newId = 0;
//         console.log(`Deleting note with id ${noteId}`);
//         data = data.filter(currentNote => {
//            return currentNote.id != noteId;
//         });
//         for (currentNote of data) {
//             currentNote.id = newId.toString();
//             newId++;
//         }
//         fs.writeFileSync("./db/db.json", JSON.stringify(data));
//         res.json(data);
//     }); 

// }


// FOURTH TRY 
// 
// 

// 
// 
// 
// Linking the noteContents in db to this routes.
// var noteContents = require("../db/noteContents")

// //Create promise-based versions of functions using node style callbacks
// const fs = require("fs");
// const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);

// // Create a route
// module.exports = function(app) {

//     //Display all notes
//     app.get("/api/notes", function(req, res) {
//         res.json(noteContents);
//     });

//     //Create new posts
//     app.post("/api/notes", function(req, res) {
//         // noteContents.push(req.body);
//         // res.json(noteContents);

//         let newNote = req.body;

//         // check to find last id in our notes json file, and assign the note to one greater than that id
//         let lastId = noteContents[noteContents.length - 1]["id"];
//         let newId = lastId + 1;
//         newNote["id"] = newId;
        
//         console.log("Req.body:", req.body);
//         noteContents.push(newNote);

//         // write to the noteContents.json file as well
//         writeFileAsync("./db/noteContents.json", JSON.stringify(noteContents)).then(function() {
//             console.log("noteContents.json has been updated!");
//         });

//         res.json(newNote);
//     });

//     // Delete a post
//     app.delete("/api/notes/:id", function(req, res) {
//         // let chosen = req.params.id;        
//         // console.log(chosen);

//         console.log("Req.params:", req.params);
//         let chosenId = parseInt(req.params.id);
//         console.log(chosenId);


//         for (let i = 0; i < noteContents.length; i++) {
//             if (chosenId === noteContents[i].id) {
//                 // delete noteContents[i];
//                 noteContents.splice(i,1);
                
//                 let noteJSON = JSON.stringify(noteContents, null, 2);

//                 writeFileAsync("./db/noteContents.json", noteJSON).then(function() {
//                 console.log ("Chosen note has been deleted!");
//             });                 
//             }
//         }
//         res.json(noteContents);
//         // data = data.filter(function(res) {
//         //     return noteContent.item.replace(/ /g, '-') !== req.params.id;
//     });
        
// };


// ok, I am very tired but let's do this one more time 
// LOAD DATA
// ====================================================
// const fs = require('fs');
// const notes = require("../db/db.json");
// const uuid = require("uuid");


// // ROUTING
// // ====================================================
// module.exports = function(app) {
//   // GET ALL NOTES
//   app.get("/api/notes", (req, res) => res.json(notes));

//   // ADD NEW NOTE
//   app.post("/api/notes", (req, res) => {
//     // Create a new note.
//     const newNote = {
//       id: uuid.v4(),
//       title: req.body.title,
//       text: req.body.text
//     };
//     notes.push(newNote); // Add new note to notes array.
//     res.json(notes); // Respond with all notes, including new.
//   });

//   // MODIFY NOTE
//   app.put("/api/notes/:id", (req, res) => {
//     // Find note in array.
//     const found = notes.some(note => note.id === parseInt(req.params.id));
//     // IF note exists...
//     if (found) {
//       const updNote = req.body; // Assign updated data to variable.
//       notes.forEach(note => { // Loop through notes array.
//         if (note.id === parseInt(req.params.id)) { // IF note found THEN...
//           note.title = updNote.title ? updNote.title : note.title; // Change title IF updated.
//           note.text = updNote.text ? updNote.text : note.text; // Change text IF updated.
//           res.json(note); // Respond with updated note.
//         } else {
//           // ELSE change status code and respond with error message.
//           res.status(400).json({ msg: "Note not found"});
//         }
//       })
//     }
//   })

//   // DELETE NOTE
//   app.delete("/api/notes/:id", (req, res) => {
//     // Find note in array.
//     const found = notes.some(note => note.id === parseInt(req.params.id));
//     // IF note exists...
//     if (found) {
//       const updNote = req.body; // Assign updated data to variable.
//       notes.forEach(note => { // Loop through notes array.
//         if (note.id === parseInt(req.params.id)) { // IF note found THEN...
//           // Respond with all notes EXCEPT the one deleted.
//           res.json(notes.filter(note => note.id !== parseInt(req.params.id)))
//         } else {
//           // ELSE change status code and respond with error message.
//           res.status(400).json({ msg: "Note not found"});
//         }
//       })
//     }
//   })
// }


// huh? what now?


// const fs = require('fs');
// const path = require('path');
// const express = require('express');
// const notesDb = require('../db/db.json');

// // const app = express();

// // app.use(express.json());


// module.exports = function(app) {
// // display notes 
// //   app.get("/api/notes", (req, res) => {
// //     fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
// //         if (err) throw err;
// //         res.json(JSON.parse(data));
// //     });
// // });
// // API GET Requests
//   // Below code handles when users "visit" a page.
//   app.get("/api/notes", (req, res) => {
//     res.json(notesDb);
//   });



// app.get('/notes', (req, res) => {
//   if (notesDB.length > 0) {
//     for (let i = 0; i < notesDB.length; i++) {
//       notesDB[i].id = i + 1;
//     }
//   }

//   res.json(notesDB);
// });

// app.post('/notes', (req, res) => {
//   const newNote = req.body;
//   let noteID = notesDB.length + 1;

//   newNote.id = noteID;

//   notesDB.push(newNote);

//   fs.writeFile(
//     path.join(__dirname, noteDb),
//     JSON.stringify(notesDB),
//     err => {
//       if (err) throw err;
//     }
//   );

//   res.json(newNote);
// });

// app.delete('/notes/:id', (req, res) => {
//   const id = req.params.id;

//   notesDB.splice(
//     notesDB.findIndex(note => note.id.toString() === id),
//     1
//   );

//   fs.writeFile(
//     path.join(__dirname, '../db/db.json'),
//     JSON.stringify(notesDB),
//     err => {
//       if (err) throw err;
//     }
//   );

//   res.json(notesDB);
// });
// }
// // module.exports = app;



// all togetehr now 


const fs = require('fs');
const path = require('path');
const express = require('express');
const notesDb = require('../db/db.json');

// const app = express();

// app.use(express.json());


module.exports = function(app) {
// display notes 
//   app.get("/api/notes", (req, res) => {
//     fs.readFile(path.join(__dirname, "/db/db.json"), "utf8", (err, data) => {
//         if (err) throw err;
//         res.json(JSON.parse(data));
//     });
// });
// API GET Requests
  // Below code handles when users "visit" a page.
  // app.get("/api/notes", function(req, res)> {
  //   res.json(notesDb);
  // });

  app.post("/api/tables", function(req, res) {

    if (tableData.length > 0) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      res.send("enter Notes")
    }
  });


  app.delete("/api/notes/:id", function(req, res) {
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


  
// app.get('/notes', (req, res) => {
//   if (notesDB.length > 0) {
//     for (let i = 0; i < notesDB.length; i++) {
//       notesDB[i].id = i + 1;
//     }
//   }

//   res.json(notesDB);
// });

// app.post('/notes', (req, res) => {
//   const newNote = req.body;
//   let noteID = notesDB.length + 1;

//   newNote.id = noteID;

//   notesDB.push(newNote);

//   fs.writeFile(
//     path.join(__dirname, noteDb),
//     JSON.stringify(notesDB),
//     err => {
//       if (err) throw err;
//     }
//   );

//   res.json(newNote);
// });

// app.delete('/notes/:id', (req, res) => {
//   const id = req.params.id;

//   notesDB.splice(
//     notesDB.findIndex(note => note.id.toString() === id),
//     1
//   );

//   fs.writeFile(
//     path.join(__dirname, '../db/db.json'),
//     JSON.stringify(notesDB),
//     err => {
//       if (err) throw err;
//     }
//   );

//   res.json(notesDB);
// });
}
// module.exports = app;

//  all in one because I don't know how to split them 
