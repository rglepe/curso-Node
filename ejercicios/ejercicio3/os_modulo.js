console.log(module);
var os = require('os');

exports.cpu = os.cpus();
exports.systema =  os.platform();
exports.servidor = os.hostname();