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