const eventEmitter = new (require('events'))
                    .EventEmitter();


let handler=(fecha)=>{
    console.log(fecha);
}                    
let inicio;
 eventEmitter.on('time', handler );
function emitirFecha(){
    inicio = Date.now();
    return inicio;
}
setInterval(()=>{
    eventEmitter.emit('time', emitirFecha())},500);

setTimeout(()=>{eventEmitter.off('time', handler);
                    console.log('Desconectado');},10000);

console.log('Fin')

