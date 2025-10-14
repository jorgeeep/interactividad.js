var nombre = 'jorge';
let edad = 22;
const PI = Math.PI;
const TAU = Math.PI;

//booleanos tipos de variable true o false
let esMayorDeEdad = edad >= 18 //variable formato camelcase


console.log('hola ' + nombre);

function saludar(_nombre='mundo') {
    alert("hola " + _nombre);
}

saludar();
saludar(nombre);
saludar('ana');