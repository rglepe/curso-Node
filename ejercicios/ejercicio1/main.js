const http = require("http");

const handler = (request, response) => {
    console.log('Recibiendo peticion');
    response.end("<p>Hola Mundo</p>");
}

const server = http.createServer(handler);

server.listen(3000);

console.log('Esperando peticion');