
const str_util = require('./str_util.js')

let str = process.argv[2];

console.log(str_util.camelCase(str));

console.log(str_util.mayusculas(str));

console.log(str_util.tipoOracion(str));

