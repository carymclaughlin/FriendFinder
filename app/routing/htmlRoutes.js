

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/:route", function (req, res) {
    var chosen = req.params.route;
    console.log(chosen);


    if (chosen == "survey") {
        res.sendFile(path.join(__dirname, "survey.html"));
    }
    else { res.sendFile(path.join(__dirname, "home.html")); }

});




