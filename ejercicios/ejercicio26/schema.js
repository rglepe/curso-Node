
/* MONGOOSE DISCRIMINATORS
  How to work with DISCRIMINATORS in mongoose
  NodeJs  : 8.9.4
  Mongoose: 5.3.8 
  @ref1: https://dev.to/helenasometimes/getting-started-with-mongoose-discriminators-in-expressjs--22m9
  @ref2: (Official doc: discriminator)[https://mongoosejs.com/docs/discriminators.html]
*/




var dbUrl = "mongodb://localhost:27017/test";
var mongoose = require('mongoose');
mongoose.connect(dbUrl);

const options = {
    discriminatorKey: 'itemtype',
    collection: 'items'
  };
  

const baseSchema = new Schema({
    title: { type: String, required: true },
    date_added: { type: Date, required: true },
    redo: { type: Boolean, required: false },
},options)

const Base = mongoose.model('item',baseSchema);

const Book = Base.discriminator('Book', new mongoose.Schema({
    author: { type: String, required: true },
  }),
);
const Movie = Base.discriminator('Movie', new mongoose.Schema({
  director: { type: String, required: true },
}),
);
const Tvshow = Base.discriminator('Tvshow', new mongoose.Schema({
  season: { type: Number, required: true },
}),
);

// Models
BookMod  = mongoose.model('Book');
MovieMod = mongoose.model('Movie');
TvShowMod = mongoose.model('Tvshow');




// # Saving records

const bookdocs = [{
  title: 'The castle', author: 'F.Kafka', date_added: Date.now()
}];

const mooviedocs = [{
  title: 'Matrix', director: 'Wachowsky Bros.', date_added: Date.now()
}];

const tvdocs = [{
  title: 'Games of Thrones', season: 1, date_added: Date.now()
}];

async function exec(){
  console.log('doing');
  await BookMod.create(bookdocs);
  await MovieMod.create(mooviedocs);
  await TvShowMod.create(tvdocs);
  console.log('Getting all');
  const docs = await Base.find(); // find all occurrences
  // Have a look to what differs from a doc to another: itemtype
  docs.forEach( doc => console.log(doc.itemtype) );
};
exec();

/* Done! */