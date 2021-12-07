window.onload = function () {

    document.
    // Numero de enlaces de la pagina
    console.log('::::::::::::::::::::::::');

    let lsa = document.getElementsByTagName('a')
    var info = document.getElementById('info');

    info.innerHTML = 'Número de en la de la página : '+lsa.length;
    console.log('log: Número de enlaces de la página.', lsa.length);


    // Direccion del penultimo enlace
    console.log(typeof lsa[lsa.length-1]);
    let url = lsa[lsa.length-1];

    console.log('Dirección del ultimo enlace', url.get);

    // Numero de enlaces que apuntan a http://prueba

    // Numero de enlaces del tercer parrafo

};
