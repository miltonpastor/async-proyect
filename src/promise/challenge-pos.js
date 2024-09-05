import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data){ //data de lo que vamos a enviar
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors', //permisos que va a tener
        credentials: 'same-origin', //same origin por default
        headers: { //cabeceras para que me reconozca (que tipo de valor estamos enviando)
            'Content-Type': 'application/json', //si estuvieramos enviando archivos deberiamos cambiar
        },   
        body: JSON.stringify(data) //informacion que quiero transmitir 
    });
    return response;
} 

const data = {
  "title": "Hey",
  "price": 9999,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"],
  
}

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(dat => console.log(dat)) //dat es el resultado del anterior then

