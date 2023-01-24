//consts
const PORT = process.env.PORT;
const express = require('express');
const notes = require('./db/db');
// const fs = require('fs');
const app = express();
const path = require('path');
//apps
app.use(express.json());
app.get('/api/notes', (req, res) => {res.json(notes);});
app.listen(PORT, () => {console.log(`server is on PORT ${PORT}!`);});
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, './public/index.html'));});
app.get('/notes', (req, res) => {res.sendFile(path.join(__dirname, './public/notes.html'));});
//functions
function makeNote(body) {

}
function deleteNote(id) {

}