const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: fs.createWriteStream('output.txt','utf8'),
    terminal: false });

/* rl.query('',(line)=>{
        rl.write(line)}); */
     rl.question('escribe algo',(line)=>{
        rl.prompt(true);
        rl.write(line)});
     rl.on('line', (line)=>{
        console.log('Escribe otra línea');
        rl.prompt(true);
           
        })
rl.resume();
                                
                          
