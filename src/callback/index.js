// CALLBACKS 

function suma(a,b){
    return a+b;
}

function calc(a,b,sumar){
    return sumar(a,b);
}

console.log(calc(1,2,suma)); //Al pasar una funcion como parametro no es necesario poner ()

//----------------

setTimeout( function(){
    console.log("HOLA COMO ESTAS")
}, 2000);

function gretting(name){
    console.log(`Hola como estas ${name}`)
}

setTimeout(gretting,2000,'Oscar')