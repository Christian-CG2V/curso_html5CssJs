function agregarItem(){
    var li = document.createElement('li');
    let texto = prompt("Valor: ","");
    var txtNode = document.createTextNode(texto);
    li.appendChild(txtNode);
    var lista = document.getElementById('lista');
    lista.appendChild(li);

    //console.log(typeof lista);

/*
    var etiqueta = '<li>Chromium 2</li>';

    lista.innerHTML = lista.innerHTML+etiqueta;
    */
}

function init(){
    //Se agrega instrucciones al boton agregar.
    var addbutton = document.getElementById('addbutton')
    addbutton.onclick = agregarItem;

    //Agregar el nodo eliminar y funcion eliminar.
    var lista = document.getElementById('lista');
    var items = document.getElementsByTagName('li');

    for (var i = 0; i < items.length; i++) {
        console.log("element: ", i);
        console.log(typeof items[i]);
        items.appendChild(crearDeleteLink());
    }
}

function crearDeleteLink(){
    var a = document.createElement('a');
    a.setAttribute('href', '#')
    var text = document.createTextNode('Eliminar');
    a.appendChild(text);
}

console.log(':::::::::: start script');
window.onload = init;
