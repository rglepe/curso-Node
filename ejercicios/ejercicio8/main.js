        const fs = require('fs');
        let streamLectura = fs.createReadStream('movieDetails.json');
        streamLectura.on('data',(chunk)=>{
            process.stdout.write(chunk.toString());
            });

        streamLectura.on('end',()=>{
                process.stdout.write('Proceso finalizado');
                                    });
       
        
