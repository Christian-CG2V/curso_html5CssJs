function sumar(x,y){
    return x + y;
}

var a = sumar(4,5);
console.log(a);

function init(){
    document.getElementsByTagName('button')[0].onclick = sumar;
}
