var hello = 'Hello'; // Se puede acceder en el scope global
var hello = 'Hello +'; // Es permitido, reemplaza el valor inicial pero es una mala practica
let world = 'Hello World'; 
// let world = 'Hello W'; //Genera error, no esposible volver a declarar la variable aplica tambien con const
const helloWorld = 'Hello World!!';
console.log(hello);


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorldFn = () => {
    globalVar = 'i am global';
}

helloWorldFn();
console.log(globalVar); // imprime la declaracion de la variable porque se genero en la funcion como una variable global, mala practica