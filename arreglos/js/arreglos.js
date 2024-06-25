let arreglo=[];
    arreglo=[ 1, 2, 3, 4, 5];

    let numero1=arreglo[ 0];
    let numero2=arreglo[ 2];
    let numero3=arreglo[ 4];

    let cantidadDatos=arreglo.length;
    let iterar;

    for(iterar=0; iterar<cantidadDatos;iterar++){
        console.log(arreglo[ iterar]);
    }

console.log("------")

    arreglo.forEach(function(elemento){
        console.log(elemento);
    }
    )


    