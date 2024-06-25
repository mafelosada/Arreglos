function formarX(cantidadDatos) {
  for (let fila = 0; fila < cantidadDatos.length; fila++) {
    let line = "";
    for (let columna = 0; columna < cantidadDatos[fila].length; columna++) {
      if (fila === columna || fila + columna === cantidadDatos.length - 1) {
        line += cantidadDatos[fila][columna] + " ";
      } else {
        line += "  "; 
      }
    }
    console.log(line);
  }
}

let arreglo = [
  [2, 4, 6, 8, 10],
  [12,14,16,18,20],
  [22,24,26,28,30],
  [32,34,36,38,40],
  [42,44,46,48,50]
];

formarX(arreglo);

