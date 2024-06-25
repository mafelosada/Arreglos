let nomina=[];
let iteracion;
let numeroRegistros;

nomina=[
    {Id:1, nombres:'Ana', apellidos:'Salazar', cargo:'Pediatra', valorDia:500000, diasTrabajados:20},
    {Id:2, nombres:'Thomas', apellidos:'Diaz', cargo:'Ingeniero Civil', valorDia:120278, diasTrabajados:15},
    {Id:3, nombres:'Laura', apellidos:'Lopez', cargo:'Aseador', valorDia:35000, diasTrabajados:31},
    {Id:4, nombres:'Barbara', apellidos:'Garcia', cargo:'Pediatra', valorDia:700000, diasTrabajados:5},
    {Id:5, nombres:'Daniel', apellidos:'Legizamo', cargo:'Profesor', valorDia:70000, diasTrabajados:45},
    {Id:6, nombres:'Gerardo', apellidos:'Muñoz', cargo:'Secretario', valorDia:60000, diasTrabajados:30},
    {Id:7, nombres:'karen', apellidos:'Alvarez', cargo:'Ingeniero Civil', valorDia:120278, diasTrabajados:24},
    {Id:8, nombres:'Camilo', apellidos:'Sanchez', cargo:'Vigilante', valorDia:50000, diasTrabajados:25},
    {Id:9, nombres:'Armel', apellidos:'Gonzales', cargo:'Pediatra', valorDia:550000, diasTrabajados:18},
    {Id:10, nombres:'Mateo', apellidos:'Losada', cargo:'Profesor', valorDia:70000, diasTrabajados:29}
];
numeroRegistros = nomina.length
for(iteracion=0; iteracion < numeroRegistros; iteracion++){
    console.log(nomina[iteracion]);
}


console.log("\n")


function salario(nomina = []) {
    return nomina.map(item => item.valorDia * item.diasTrabajados);
}

let nomina2 = [
    { Id: 1, nombres: 'Ana', apellidos: 'Salazar', cargo: 'Pediatra'},
    { Id: 2, nombres: 'Thomas', apellidos: 'Diaz', cargo: 'Ingeniero Civil' },
    {Id:3, nombres:'Laura', apellidos:'Lopez', cargo:'Aseador'},
    {Id:4, nombres:'Barbara', apellidos:'Garcia', cargo:'Pediatra'},
    {Id:5, nombres:'Daniel', apellidos:'Legizamo', cargo:'Profesor'},
    {Id:6, nombres:'Gerardo', apellidos:'Muñoz', cargo:'Secretario'},
    {Id:7, nombres:'karen', apellidos:'Alvarez', cargo:'Ingeniero Civil'},
    {Id:8, nombres:'Camilo', apellidos:'Sanchez', cargo:'Vigilante'},
    {Id:9, nombres:'Armel', apellidos:'Gonzales', cargo:'Pediatra'},
    {Id:10, nombres:'Mateo', apellidos:'Losada', cargo:'Profesor'}
];
let numeroRegistros2;
let iterar;
numeroRegistros2 = nomina2.length
for(iterar=0; iterar < numeroRegistros2; iterar++){
    for (let fila = 0; fila < nomina2.length; fila++) {
        nomina2[fila].salario = salario([nomina[fila]])[0];
    }
    console.log(nomina2[iterar]);
}
 

let salarioMinimo=1600000;
function subTrans(nomina2=[]){
    let transporte;
    let subTransporte=nomina2.map(item => item.salario);
        if (subTransporte<=salarioMinimo*2) {
            transporte=1200000;
        }
        else{
            transporte=0;
        }
        return transporte;
    }

    function salud(nomina2=[]){
        return nomina2.map(item => item.salario * 0.12);
    }
    function pension(nomina2=[]){
        return nomina2.map(item => item.salario * 0.16);
    }
    function arl(nomina2=[]){
        return nomina2.map(item => item.salario * 0.052);
    }

    function retencion(nomina2=[]){
        let valor1=nomina2.map(item => item.salario);
        let retenciones;
        if (valor1>=salarioMinimo*6) {
            retenciones=nomina2.map(item => item.salario)*0.02;
        }
        else if (valor1 >= salarioMinimo*8) {
            retenciones =nomina2.map(item => item.salario)*0.04;
        } 
        else if(valor1 >= salarioMinimo*12){
            retenciones =nomina2.map(item => item.salario)*0.08;
        }
        else{
            retenciones=0;
        }
        return retenciones;
    }

function totalPago(nomina2=[]){
    let sumaPago = nomina2.map(item => item.salario + item.SubTransporte);
    let descuentos = nomina2.map(item => item.Salud + item.Pension + item.Arl + item.Retencion);

    return sumaPago - descuentos;
    
}


for (let fila = 0; fila < nomina2.length; fila++) {
    nomina2[fila].SubTransporte = subTrans([nomina2[fila]]); 
    nomina2[fila].Salud = salud([nomina2[fila]])[0];
    nomina2[fila].Pension  = pension([nomina2[fila]])[0];
    nomina2[fila].Arl = arl([nomina2[fila]])[0];
    nomina2[fila].Retencion = retencion([nomina2[fila]]); 
    nomina2[fila].TotalPago = totalPago([nomina2[fila]]); 
}


console.log("\n")
console.log("Total Pagos")
console.log("\n")


let nomina3 = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
];
let iteracion3;
let numeroRegistros3 = nomina3.length
for(iteracion3=0; iteracion3 < numeroRegistros; iteracion3++){
    console.log(nomina3[iteracion3]);
}

function totalNomina(nomina2=[]) {
    return nomina2.map(item => item.Salud + item.Pension + item.Arl + item.Retencion);
}

for (let filas = 0; filas < nomina3.length; filas++) {
    nomina3[filas].Salud = salud([nomina2[filas]])[0];
    nomina3[filas].Pension  = pension([nomina2[filas]])[0];
    nomina3[filas].Arl = arl([nomina2[filas]])[0];
    nomina3[filas].Retencion = retencion([nomina2[filas]]); 
    nomina3[filas].TotalPagar = totalNomina([nomina2[filas]])[0]; 
}