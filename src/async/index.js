/* FUNCIONES ASINCRONAS
    - Permite trabajar con multiples elementos que queramos llamar o ejecutar sin detener el flujo de nuestra implementacion   
    - Devuelve un ojeto
    - Se debe usar await dentro de una funcion async
*/

const fnAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'), 2000) //3
        : reject(new Error('Error'));
    });
}

const anotherFn = async () => {  //es asincrona porque llamamos a una promesa dentro
    const something = await fnAsync(); //espera hasta que devuelva halgo la promesa para seguir con lo demas de la funcion 
    console.log(something);
    console.log('hello'); //4
}

console.log('Before'); //1
anotherFn(); //como es aync nuestra aplicacion no se detiene
console.log('After'); //2