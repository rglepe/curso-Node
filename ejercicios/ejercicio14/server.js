var net = require('net');
var server = net.createServer();
var sockets = [];

server.on('connection', socket => {
    console.log('got a new connection');
    socket.write(`Please enter a room name\r\n`);
    
    sockets.push(socket);
    socket.on('data', function(data) {
        //if (data.) console.log (data+':'+data.toString);
        console.log('got data:', data.toString);
        sockets.forEach(function(otherSocket) {
            if (otherSocket !== socket) {
            //otherSocket.write(+' >');    
            otherSocket.write(data);
            }/* else {if (data!=='\r\n') {let arr =[]; let msg = arr.push(data); socket.write(msg);}}  */
        });
    });

    s

    socket.on('close', function() {
        console.log('connection closed');
        var index = sockets.indexOf(socket);
        sockets.splice(index, 1);
    });
});

server.on('error', function(err) {
    console.log('Server error:', err.message);
});
server.on('close', function() {
    console.log('Server closed');
});

server.listen(4001);