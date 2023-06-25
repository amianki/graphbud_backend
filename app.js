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

    // READ TABLE
    myDb.all(`SELECT * FROM companies`, (err, rows) => {
        if (err) console.error(err.message);
        // rows.forEach((row) => {
        //     console.log(row);
        // })
        res.send(rows);
    });
    

});

// GET BY ID
app.get('/company/:id', (req, res) => {
    // let companyById = "Id does not exist!!";
    // for (let index = 0; index < companies.length; index++) {
    //     if (companies[index].id == req.params.id) {
    //         companyById = companies[index]; 
    //     }
    // }
    // companies.forEach(company => {
    //     if (company.id == req.params.id) {
    //         companyById = company;
    //     }
    // });

    // FIND BY ID
    myDb.all(`SELECT * FROM companies WHERE id = '${req.params.id}'`,(err,rows)=>{
        if(err) console.error(err);
        res.send(rows);
    })

   

});

// ADD NEW COMPANY
app.post('/company', (req, res) => {
    companies.push(
        {
            id: 4567,
            name: "infosys",
            location: "bangalore"
        }
    )

    res.send("successfull");

});

// UPDATE COMPANY
app.put('/company/:id', (req, res) => {
    let updatedCompany = {
        id: req.body.id,
        name: req.body.name,
        location: req.body.location
    }
    for (let index = 0; index < companies.length; index++) {
        if (companies[index].id == req.params.id) {
            companies[index] = updatedCompany;
        }
    }
    res.send(updatedCompany);
})

// DELETE COMPANY DETAILS BY ID
app.delete('/company/:id', (req, res) => {
    for (let index = 0; index < companies.length; index++) {
        if (companies[index].id == req.params.id) {
            companies.splice(index, 1);
        }
    }
    res.send("deleted successfully..");
})
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