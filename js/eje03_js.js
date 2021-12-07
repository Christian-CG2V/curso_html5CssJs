function alerta() {
    texto = "Este es un texto con comillas dobles. ";
    texto2 = 'Este es un texto con comillas simples. ';
    texto3 = 'Este es un \'texto entre comillas\' con otras comillas';

    //alert('hizo click!')
    alert(texto + ' '+texto2+ ' '+texto3);
}

function alerta2() {
    var contador = 10;
    contador = null;
    console.log(contador);
    console.log(typeof contador);
}

function alerta3() {
    var contador = 10;
    if(contador === '10.0'){
        console.log('El entero es igual al real');

    }else {
        console.log('El entero no es igual a real.');
    }
}

function hacerclick() {
    // document.getElementsByTagName('p')[0].onclick= alerta;
    document.getElementById('uno').onclick = alerta;
    document.getElementById('button01').onclick = alerta3;
}

console.log('Caso');

window.onload = hacerclick;
