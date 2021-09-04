const fruits  = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();

const anotherfunction = () => {
    var x = 1;
    var x = 2; // reescribe la linea de arriba
    let y = 1;
    // let y = 2; // genera error porque esta asignada solo con let y const
    console.log(x);
    console.log(y);
}

anotherfunction();
console.log(fruit); //genera error porque no es scope global