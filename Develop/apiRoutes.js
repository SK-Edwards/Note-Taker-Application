const uuid = require('uuid');
const fs = require('fs');
const router = require("express").Router();


router.get("/notes", (req, res) => {
    const data = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(data));

    console.log(JSON.parse(data));
});

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNote = req.body;
    newNote.id = uuid.v4();
    notes.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);

    console.log( JSON.stringify(notes));
});


router.delete('/notes/:id', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('.db/db.json'));
    const removeNote = notes.filter((deleteNote) => deleteNote.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(removeNote));

    res.json(removeNote);

    console.log(JSON.stringify(removeNote));
})

module.exports = router