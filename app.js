const express = require("express");
const app = express();
const port = 3000;
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
app.get('/companies', (req, res) => {
    res.send(companies);
});
app.get('/company/:id', (req, res) => {
    let companyById = "Id does not exist!!";
    for (let index = 0; index < companies.length; index++) {
        if (companies[index].id == req.params.id) {
            companyById = companies[index]; 
        }
    }
    res.send(companyById);



});
app.listen(port, () => {
    console.log("app is running on port no " + port);
});