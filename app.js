const express = require("express");
const app = express();
app.use(express.json());
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
    // for (let index = 0; index < companies.length; index++) {
    //     if (companies[index].id == req.params.id) {
    //         companyById = companies[index]; 
    //     }
    // }
    companies.forEach(company => {
        if (company.id == req.params.id) {
            companyById = company;
        }
    });

    res.send(companyById);

});
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
app.put('/company/:id',(req,res) =>{
    let updatedCompany = {
        id: req.body.id,
        name: req.body.name,
        location:req.body.location
    }
    for (let index = 0; index < companies.length; index++) {
            if (companies[index].id == req.params.id) {
                 companies[index] = updatedCompany; 
            }
        }
    res.send(updatedCompany);
})
app.delete('/company/:id',(req,res) =>{
    for (let index = 0; index < companies.length; index++) {
        if (companies[index].id == req.params.id) {
            companies.splice(index,1); 
        }
    }
    res.send("deleted successfully..");
})
app.listen(port, () => {
    console.log("app is running on port no " + port);
});