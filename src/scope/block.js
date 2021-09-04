const fruits = () => {
    if (true) {
        let fruits1 = 'apple';
        const fruits2 = 'banana';
        var fruits3 = 'kiwi';
    }
    console.log(fruits1);// genera error porque no esta en el scope del bloque if
    console.log(fruits2);// genera error porque no esta en el scope del bloque if
    console.log(fruits3);
}

fruits();

let x = 1;

{
    let x = 2;
    console.log(x); // imprime el valor del bloque
}

console.log(x); // imprime el scope global

var x1 = 1;

{
    var x1 = 2;
    console.log(x1); // imprime el valor del bloque
}

console.log(x1); // imprime el scope global pero modificado

const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i); // imprime siempre 10 por ser variable global (var), pero se puede cambiar por let para que imprima el formato de bloque
        }, 1000);
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i); 
        }, 1000);
    }
}

anotherFunction();