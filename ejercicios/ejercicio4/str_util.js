exports.camelCase =  camelCase;
exports.mayusculas =  mayusculas;
exports.tipoOracion = tipoOracion;

//www.regexpal.com

function tipoOracion(str) {
    str = str || '';
	if (str.length <= 0) {
		return new TypeError('Debe ser una cadena') ;
	}
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter) {
		return letter.toUpperCase();
	}) +` como tipoOracion`;
}

function mayusculas(str) {
    str = str || '';
	if (str.length <= 0) {
		return new TypeError('Debe ser una cadena') ;
	}
	return str.toLowerCase() +` en minusculas`; 
}

function camelCase(str) {
	str = str || '';
	if (str.length <= 0) {
		return new TypeError('First argument has to be a string') ;
	}
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
		return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
	}).replace(/\s+/g, '') +` en camelCase`;
}

