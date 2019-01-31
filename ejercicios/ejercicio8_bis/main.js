const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout });

rl.question('descargar fichero [s(i)|n(o)]?', (answer)=>{
    rl.on('close',()=>{console.log('bye')});
    if(answer.match(/^s(i)?$/i))
        {

        const fs = require('fs');
        let streamLectura = fs.createReadStream('../ejercicio8/movieDetails.json');
        streamLectura.on('data',(chunk)=>{
            process.stdout.write(chunk.toString());
            });

        streamLectura.on('end',()=>{
                process.stdout.write('Proceso finalizado');
                                    });
        
                                    
                rl.close();

        } else {
            rl.close();
           // process.exit
            //rl.on('close',()=>{console.log('bye')});
        }                            
                            
})                          
