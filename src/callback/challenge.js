//-----------------------XMLHttpRequest--------------------

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest //llamamos a la dependencia que instale con npm
const API = 'https://api.escuelajs.co/api/v1';


//FUNCION PRINCIPAL PARA HACER EL LLAMADO
function fetchData(urlApi, callback){//el callback es para recibir lo que solicitamos data/error
    let xhttp = new XMLHttpRequest(); 

    xhttp.open('GET', urlApi, true); //open para abrir una conceccion a nuestra API y get para obtener
    xhttp.onreadystatechange = function (event){ //escuchar diferentes estados que tiene la solicitud
        if(xhttp.readyState === 4){  //0: no inicializado, 1: loading, 2: se ejecuto, 3: interactuando, 4: completado
            if(xhttp.status === 200){ // 200 correcto 
                callback(null, JSON.parse(xhttp.responseText)); //recibimos en texto y lo debemos transjormar en objeto
            } else {
                const error = new Error('Error' + urlApi)
                return callback(error, null); //recibimos error
            } 
        }
    } 
    xhttp.send();
} 


//--------------FETCHDATA -> Como podemos anidar multiples llamadas en el callback-------------------------

//Usamos varios callbacks para obtener 3 datos 
fetchData(`${API}/products`, function(error1, data1){
    if(error1) return console.error(error1); //si, devuelve el error
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){ //? no me de error si ...
            if(error3) return console.log(error3);
            console.log(data1[0]); 
            console.log(data2.title);
            console.log(data3.name);
        })
    })
})


//CALBACK HELL: anidar anidar multiples llamadas
//Para ejecutar esto como un script en la consola, solo se debe poner la ruta en scripts del package.json y en la consola ejecutar npm run name
