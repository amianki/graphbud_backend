const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());
const port = 3000;

// CONNECT TO DB
const myDb = new sqlite3.Database("./myDb.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) console.log(err.message);
});

// CREATING TABLE
// myDb.run("CREATE TABLE companies (id INTEGER PRIMARY KEY, name VARCHAR(20), location VARCHAR(10))");

// INSERT VALUES INTO TABLE
// myDb.run(`INSERT INTO companies VALUES(123,"Samsung","Mumbai")`);
// myDb.run(`INSERT INTO companies VALUES(456,"Apple","Kolkata")`);
// myDb.run(`INSERT INTO companies VALUES(789,"Nokia","Chennai")`);

// GET ALL
app.get('/companies', (req, res) => {

    myDb.all(`SELECT * FROM companies`, (err, rows) => {
        if (err) console.error(err.message);
        res.send(rows);
    });
});

// GET BY ID
app.get('/company/:id', (req, res) => {

    myDb.all(`SELECT * FROM companies WHERE id = '${req.params.id}'`, (err, rows) => {
        if (err) console.error(err);
        res.send(rows);
    });
});

// ADD NEW COMPANY
app.post('/company', (req, res) => {

    myDb.run(`INSERT INTO companies VALUES("${req.body.id}","${req.body.name}","${req.body.location}")`);
    res.status(201).send("successfull");
});

// UPDATE COMPANY
app.put('/company/:id', (req, res) => {
    myDb.run(`UPDATE companies SET name = '${req.body.name}', location = '${req.body.location}' WHERE id = "${req.params.id}"`, (err, result) => {
        
        if (err) console.log(err.message)
        res.send(result);
    });
});

// DELETE COMPANY DETAILS BY ID
app.delete('/company/:id', (req, res) => {

    myDb.run(`DELETE FROM companies WHERE id = '${req.params.id}'`);
    res.send("deleted successfully..");
});

app.listen(port, () => {
    console.log("app is running on port no " + port);
});










































































































const companies = [
    {
        id: 1234,
        name: "graphbud",
        location: "kolkata"
    },
    {
        id: 5678,
        name: "samsung",
        location: "hyd"
    },
    {
        id: 9123,
        name: "tcs",
        location: "chennai"
    }
]