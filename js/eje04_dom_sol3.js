window.onload = funcionInicial;

function funcionInicial() {
    // var parrafo = document.getElementsByTagName('p');
    var enlace = document.getElementsByTagName('a');

    for (var i = 0; i < enlace.length; i++) {
        // p = parrafo[i];
        //alert(p.id);
        e = enlace[i];
        enlace[i].addEventListener("click", function() {
        //    alert(p.id);
            muestraOculta(this);
        });
    }
}

function muestraOculta(p, e) {
    alert(this.id);

    switch(p.style.display) {
    case 'none':
        p.style.display = 'block';
        e.innerHTML = 'Ocultar Párrafo';
        break;
    case 'block':
    case '':
        p.style.display = 'none';
        e.innerHTML = 'Mostrar Párrafo';
        break;
    }
}
