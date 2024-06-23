const express = require("express");
const app = express();
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
})

app.get("/logout", function (req, res) {
    res.send("logout karna hai kya ? ");
})

app.get("/profile", function (req, res) {
    res.send("Login karna hai Vikram ko  ");
})

app.get("/profile/:username", function (req, res) {
    const userdata = req.params.username;
    res.send(userdata);
})
app.get("/profile/laxu/:name", function (req, res) {
    const username = req.params.name;
    res.send(username);
})

// Double dynamic routing 
app.get("/profile/:username/:age", function (req, res) {
    const username = req.params.username;
    const userage = req.params.age;
    res.send(`My name is ${username} and i am of ${userage} years of age`);
})

app.listen(3000, function () {
    console.log("App is running");
})



