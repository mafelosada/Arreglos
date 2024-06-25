let tienda= [];
let numeroRegistros;
let iteracion;
let nuevoProducto;
let listaBusqueda= [];

tienda=[
    {producto:'arroz', tipoProducto:'granos', tipoUnidad:'gramos', cantidad:1000, precio:2450},
    {producto:'papa', tipoProducto:'fruver', tipoUnidad:'gramos', cantidad:500, precio:1000},
    {producto:'mora', tipoProducto:'fruver', tipoUnidad:'gramos', cantidad:500, precio:1500},
    {producto:'trucha', tipoProducto:'carnes', tipoUnidad:'gramos', cantidad:1000, precio:9000
},
    {producto:'pollo Entero', tipoProducto:'carnes', tipoUnidad:'gramos', cantidad:500, precio:4500}
];


nuevoProducto={producto:'res', tipoProducto:'carnes', tipoUnidad:'gramos', cantidad:1000, precio:7500};

tienda.push(nuevoProducto);
tienda[0].precio = 5000;//modificar elemento

numeroRegistros = tienda.length;

for(iteracion=0; iteracion < numeroRegistros; iteracion++){
    console.log(tienda[iteracion]);
}


for(iteracion=0; iteracion < numeroRegistros; iteracion++){
    if(tienda[iteracion].tipoProducto=='fruver'){
        listaBusqueda.push(tienda[iteracion]);
    }
    else{
        console.log("");
    }
}

console.log(listaBusqueda);

console.log(numeroRegistros);

const nuevoArreglo = {};
tienda.forEach(producto => {
    const nombre = producto.producto;
    const valor = producto.cantidad * producto.precio;
    nuevoArreglo[nombre] = valor;
});

console.log(nuevoArreglo);

