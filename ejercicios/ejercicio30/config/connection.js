const mongoose = require('mongoose');
const db = process.env.MONGODB_URI||'mongodb://localhost:27017/test';
const connectionDB = mongoose.connect(db, { useNewUrlParser: true })
    .then(()=>console.log('connection established'))
    .catch(console.error.bind(console, 'error: '))

exports=connectionDB
