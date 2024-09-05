/* GENERATOR
    - Estructura que nos va a permitir a nosotros poder utilizar un iterador 
        con el cual podemos pausar o retornar lo que deseemos segun sea necesario
    - next: nos va a poder ir iterando
    - yield: es el return y puede ser varios
*/

function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen(); 
console.log(g.next().value); //imprime 1
console.log(g.next().value); //imprime 2
console.log(g.next().value); //imprime 3

//------------------

function* iterable(array){
    for (let value of array){
        yield value;
    }
}

const it = iterable(['Oscar', 'omar', 'ana', 'lucia', 'juan']);
console.log(it.next().value); //imprime Oscar
console.log(it.next().value); //imprime omar
console.log(it.next().value); //imprime ana
console.log(it.next().value);
console.log(it.next().value);


