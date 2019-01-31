const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const studentsRoutes = require('./routes/studentsRoutes')
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
  });

app.use('/api', studentsRoutes(io))
server.listen(80);

// Eventos en servidor: 'connection','anything','disconnect','message')

io.on('connection', function (socket) {
  io.emit('news', { hello: 'world' });
  socket.on('message', function (data) {
    console.log(data);
  });
});