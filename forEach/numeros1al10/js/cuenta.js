let arreglo=[];
    arreglo=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arreglo.forEach(function(elemento){
    console.log(elemento);
    
}
)

let numerosPares = arreglo.filter((numero) => numero % 2 === 0);
        
console.log("Números pares del 1 al 10:", numerosPares);

let numerosImpares = arreglo.filter((numero) => numero % 2 === 1);
    
console.log("Números impares del 1 al 10:", numerosImpares);

