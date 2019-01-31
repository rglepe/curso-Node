const fs = require('fs');
const os_modulo = require('./os_modulo')
let cpu_str = JSON.stringify(os_modulo.cpu);
let sistema_str = JSON.stringify(os_modulo.systema);
let servidor_str = JSON.stringify(os_modulo.servidor);


template = `Datos de CPU: ${cpu_str}
            Datos de SISTEMA: ${sistema_str}
            Datos de SERVIDOR: ${servidor_str}
            `


fs.appendFile('log_sistema.txt',template,function(error){
    if(error){
        console.log('no se pudo generar el archivo');
    }
})

