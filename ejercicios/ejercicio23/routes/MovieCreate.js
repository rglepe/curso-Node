const squema = require('../models/schema')
const Movie = squema.Movie;

const create = (req, res)=>{
    //Check if all fields are provided and are valid:
   movie = new Movie({name: req.body.name,
                      year: req.body.year,
                      rate: req.body.rate})
    Movie.create(movie)
      .then((movie)=>{ res.json({message: "New movie created.", 
      location: "/movies/" + movie._Id})})
      .catch((error)=>console.log(error.message));
    };

 
 module.exports = create