const http = require('http');
const os_modulo = require('./os_modulo')
let cpu_str = JSON.stringify(os_modulo.cpu);
let sistema_str = JSON.stringify(os_modulo.systema);
let servidor_str = JSON.stringify(os_modulo.servidor);

template = `<p>Datos de CPU:</br> ${cpu_str}</p>
            <p>Datos de SISTEMA:</br> ${sistema_str}</p>
            <p>Datos de SERVIDOR:</br> ${servidor_str}</p>`

const handler = (req, res) => {
    console.log('Recibiendo peticion');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(template);
}

const server = http.createServer(handler);
server.listen('3000');

console.log ('escuchando en localhost:3000');