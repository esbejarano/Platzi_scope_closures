
const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();

console.log(hello); // error porque la variable es local o bloque de la funcion


var scope = "global var";
const functionScope =() =>{
    var scope = "I am just a local"; // aqui esta declarando una variable scope para el scope de la funcion, pero no esta reemplazando el valor de la variable global ya creada
    const fu = () => {
        return scope;
    }
    console.log(fu());
}

functionScope();
console.log(scope);