// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const jiberish = require('./app/data/friends');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes for api and html.. move when running
// =============================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends/", function (req, res) {
    console.log(friends);
    return res.json(friends);
})

//  Catches the submissions from /survey
app.post("/api/submission", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var profile = req.body;
    var retVal
    jiberish.friend1.push(profile);
    jiberish.friendly();
    retVal = jiberish.product[0].photo + "\n" + jiberish.product[0].name + " is your best match! \n" + " scores by category: " + jiberish.product[0].scores;
    var ret1 = {
        retVal: retVal
    }

    res.json(ret1)
    //reset
   jiberish.clear1();
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});