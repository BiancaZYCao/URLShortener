const mongoose = require("mongoose");
const { json } = require("express");
const schema = new mongoose.Schema({
  originalURL: { type: String, required: true },
  alias: { type: String, required: true, unique: true },
});

//(modelName,Schema object,ColletionName)
const shortener = mongoose.model("Url", schema, "urlShorteners");

module.exports = shortener;
