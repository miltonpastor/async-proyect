//-------------FETCH (npm i node-fetch) -----------------
//Para llamar mi API con promesas

import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1';

//funcion que va a recibir la url api y esto me da a retornar un fetch (basicamente una promesa)
function fetchData(urlApi){
    return fetch(urlApi); //Promesa
};

/* fetchData(`${API}/products`)
   .then(response => response.json()) //datos obtenidos de la promesa a json 
   .then(products => {
        console.log(products);
   })
   .then(() => console.log("Hola"))
   .catch(error => console.log(error)); */

//--------Fetch anidado

fetchData(`${API}/products`) //solicitamos productos
   .then(responde => responde.json()) //a json la solicitud
   .then(products => { //imprimimos el json y con ese data solicitamos solo un producto
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    }) 
   .then(response => response.json()) //a json la solicitud
   .then(product => { //imprimimos y otra solicitud
        console.log(product);
        return fetchData(`${API}/categories/${product.category.id}`)
   })
   .then(response => response.json())
   .then(category => console.log(category))
   .catch(error => console.log(error))
   .finally(() => console.log("Finally"));