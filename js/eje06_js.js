var incredientes = new Array();
incredientes[0] = 'Azucar';
incredientes[1] = 'Sal';
incredientes[2] = 'Harina';
incredientes[8] = 'Leche'
incredientes[4] = true;

for (var i of incredientes) {
    console.log(i);
}

console.log("::::");
//console.log(incredientes[2]);
//console.log(incredientes);
//console.log('Longitud del arreglo: ',incredientes.length);

/*
var scores = new Array();
console.log(scores.length);
*/

/*
var x = ['Azucar', 'Leche', 'café'];

var cadena = x.join();
console.log(cadena);
*/


var x = ['Azucar', 'Leche', 'café', 'Crema']

var ultimo = x.pop();
console.log(ultimo);

var length = x.push('Canela')
console.log('Longitud: '. length);
console.log(x);
