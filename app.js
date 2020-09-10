const express = require("express");
const app = express();

//import dotenv for PORT and DB_URL
require("dotenv").config();
console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);

//import bodyParser for JSON
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//enable database connection
require("./models/db");

//Add homepage
app.get("/", (req, res) => {
  res.send("Homepage");
});

//model
const Url = require("./models/shortenerModel");

//GET
app.get("/:alias", (req, res) => {
  //only return one record instead of array
  Url.findOne({ alias: req.params.alias }, (err, data) => {
    if (err) {
      console.log(err.stack);
      return res.status(500).send(err);
    } else if (!data) {
      return res.status(404).send("This alias does not exist in database.");
    }
    return res.redirect(data.originalURL);
  });
});

//POST save url info - async
app.post("/", async (req, res) => {
  try {
    let urlSht = new Url(req.body);
    Url.findOne({ alias: urlSht.alias }, (err, data) => {
      if (err) return res.status(500).send(err);
      if (data)
        return res
          .status(409)
          .send("Confliction: This alias has already existed in database.");
    });
    await urlSht.save();
    res.status(201).json(urlSht);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server for lab08 is running at port 
  ${process.env.PORT}.`);
});
