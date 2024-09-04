const promise = new Promise(function (resolve, reject){ //parametro funcion anonima que me va a devolver la informacion
    resolve('Hey!');

});
//---------------------------
const cows = 10;

const countCows = new Promise(function(resolve, reject){ //resolve cuando cumple y reject cuando no cumple la promesa
    if(cows>10){
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject(`There is no cows on the farm`)
    }
})

// -> llamada de la promesa
countCows.then((result) => { 
    console.log(result);
}).catch((error) => {  //para el reject 
    console.log(error);  
}).finally(()=> console.log('finally')) //cuando ya termino la promesa no importa si es rejecto o resolve

//.then nos va a permitir concatenar otras solucitudes
//.catch nos va a mostrar el error
//.finally ya termino toda ejecucion que puede estar esperando esta promesa



