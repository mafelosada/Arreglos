console.log("TABLA DEL 5")
let arreglo = [];
    let iteracion1;
    let iteracion2;
    let acumulador=0;

    
    for(iteracion1=0; iteracion1<5; iteracion1++){
        let interno= [];
        for(iteracion2=0; iteracion2<5; iteracion2++){
            acumulador=acumulador +1; 
            interno[iteracion2]=acumulador*5;
        }
        arreglo [iteracion1]=interno; 
        
    }

    console.log(arreglo)

    let numeroPar=[];
    let numeroImpar=[];
    
    for (let fila of arreglo) {
        for (let numero of fila) {
            if (numero % 2 === 0) {
                numeroPar.push(numero);
            } else {
                numeroImpar.push(numero);
            }
        }
    }
    
    console.log("Números pares:", numeroPar);
    console.log("Números impares:", numeroImpar);



console.log("TABLA DEL 9")
let arreglos = [];
    let iteracion11;
    let iteracion22;
    let acumuladores=0;
    
    for(iteracion11=0; iteracion11<5; iteracion11++){
        let interno= [];
        for(iteracion22=0; iteracion22<5; iteracion22++){
            acumuladores=acumuladores +1; 
            interno[iteracion22]=acumuladores*9;
        }
        arreglos [iteracion11]=interno; 
    }

    console.log(arreglos)

    let numerosPares=[];
    let numerosImpares=[];
    
    for (let fila of arreglos) {
        for (let numero of fila) {
            if (numero % 2 === 0) {
                numerosPares.push(numero);
            } else {
                numerosImpares.push(numero);
            }
        }
    }
    
    console.log("Números pares:", numerosPares);
    console.log("Números impares:", numerosImpares);