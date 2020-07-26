// include express
const express = require("express");
const exphbs = require("express-handlebars");
const generateBullshit = require("./bullshit.js");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// express-handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// set route
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  console.log("req.body", req.body);
  console.log(generateBullshit);
  let reqBody = req.body;
  let designer = false;
  let engineer = false;
  let entrepreneur = false;
  if (req.body.target !== undefined) {
    switch (req.body.target) {
      case "designer":
        designer = true;
        break;
      case "engineer":
        engineer = true;
        break;
      case "entrepreneur":
        entrepreneur = true;
        break;

      default:
        break;
    }
  }
  // handle error massage
  let errorMsg = false;
  if (reqBody.target === undefined) {
    errorMsg = true;
  }
  let boxMsg = generateBullshit(reqBody);
  console.log(boxMsg);
  res.render("index", {
    boxMsg,
    errorMsg,
    reqBody,
    designer,
    entrepreneur,
    engineer,
  });
});

// start the server
app.listen(port, (req, res) => {
  console.log(`The Express is running on http://localhost:${port}`);
});
