const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {type: String, 
         required: true },
  year: {type: Number, 
         match:[/^[0-9]{4}$/g, new Error(404)]},
  rating: {type: Number, 
         match: [/^[0-9]\.[0-9]$/g, new Error(404)] }
});

Movies = mongoose.model("movie", movieSchema);

exports = { Movies };
