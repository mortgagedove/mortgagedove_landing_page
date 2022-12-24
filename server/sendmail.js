
require("dotenv").config();
const axios = require('axios')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE,
);

app.post('/v1/send_mail', async function (req, res) {

    var hometype = req.body.hometype;
    var homeval = req.body.homeval;
    var mortbal = req.body.mortbal;
    var state = req.body.state;
    var zipcode = req.body.zipcode;
    var yourage = req.body.yourage;
    var spouseage = req.body.spouseage;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var phone = req.body.phone;

    const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
    Messages: [
        {
        From: {
            Email: "admin@mortgagedove.com",
            Name: "Mortgage Dove"
        },
        To: [
            {
            Email: "service@mortgagedove.com",
            Name: "Service"
            }
        ],
        Subject: "Mortgage Inquery",
        TextPart: "Dear, please response to this inquery asap!.",
        HTMLPart: "<h3>Client information: <br> First Name: "+ firstname+ "<br> Last Name: "+ lastname + "<br> Home Type: "+ hometype+ "<br> Home Value: "+ homeval+"<br> Mort Balance: "+ 
                    mortbal + "<br> State: "+ state+ "<br> Zip Code: "+ zipcode+ "<br> Age: "+ yourage + "<br> Spouse Age: " + spouseage + "<br> Email: " + email + "<br> Phone: "+ phone 
        }
    ]
    })

    request.then((result) => {
        res.json({ message: "Successfully sent" })
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
    
});

app.all("*", function (req, res, next) {
    return res.send('page not found');
    next();
  });
  
  app.listen(8080, function () {
    console.log('Node app is running on port 8088');
  });
  
  module.exports = app;