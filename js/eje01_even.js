
function resaltar(elemento) {
    console.log('metodo resaltar')
    console.log('El color del element: ',elemento.style.borderColor);
    // x = window.getComputedStyle( contenido ,null).getPropertyValue('background-color');

    switch(elemento.style.borderColor) {
    case 'silver':
    case 'silver silver silver silver':
    case '#c0c0c0':
        elemento.style.borderColor = 'black';
        console.log('this is de border color black');
        break;
    case 'black':
    case 'black black black black':
    case '#000000':
        elemento.style.borderColor = 'silver';
        console.log('this is the border color silver');
        break;
    case 'red':
    case 'red red red red':
    case '#ff0000':
        elemento.style.borderColor = 'silver';
        console.log('Ya no es read was redd');
        break;
    }
}

function ex(){

    resaltar(this);
}

function init(){
    var contenido = document.getElementById('contenido');
    console.log('Color es: ',contenido.style);
    console.log('Color es: ',contenido.style.borderBottomColor);

    x = window.getComputedStyle( contenido ,null).getPropertyValue('background-color');

    console.log('por compute: ',x);
    console.log('por property ',contenido.backgroundColor);
    console.log('por style',contenido.style.backgroundColor);

        contenido.onmouseover = ex;
    contenido.onmouseout = ex;
}
console.log(':::::::::::: start :::::');
//window.onload = init


function initByInitStyle(){
    console.log('forma de style');
    const divElement = document.getElementById("contenido");
    divElement.style.borderColor = 'silver';

    divElement.onmouseover = ex;
    divElement.onmouseout = ex;
}


window.onload = initByInitStyle;

function initByEvent(){
    const divElement = document.getElementById("contenido");
    divElement.addEventListener("mouseover", new function(){
        console.log('in mouse over');
        divElement.style.borderColor = 'silver';
    });

    divElement.addEventListener('mouseout',new function(){
        divElement.style.borderColor= 'black';
    });


}
