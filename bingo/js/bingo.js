    let bingo = [];
    let iteracion1;
    let iteracion2;
    let acumulador=0;
    
    for(iteracion1=0; iteracion1<5; iteracion1++){
        let interno= [];
        for(iteracion2=0; iteracion2<5; iteracion2++){
            acumulador=acumulador +1; 
            interno[iteracion2]=acumulador*3;
        }
        bingo [iteracion1]=interno; 
    }
    console.log(bingo)

    console.log("B")
    console.log("\n")
    for(iteracion2=0; iteracion2<5; iteracion2++){
        console.log(bingo [iteracion2] [0]+"");
    }

    console.log("\n")

    console.log("I")
    console.log("\n")
    for(iteracion2=0; iteracion2<5; iteracion2++){
        console.log(bingo [iteracion2] [1]+"");
    }

    console.log("\n")  

    console.log("N")
    console.log("\n")
    for(iteracion2=0; iteracion2<5; iteracion2++){
        console.log(bingo [iteracion2] [2]+"");
    }

    console.log("\n")

    console.log("G")
    console.log("\n")
    for(iteracion2=0; iteracion2<5; iteracion2++){
        console.log(bingo [iteracion2] [3]+"");
    }

    console.log("\n")

    console.log("O")
    console.log("\n")
    for(iteracion2=0; iteracion2<5; iteracion2++){
        console.log(bingo [iteracion2] [4]+"");
    }


    console.log("\n")
    console.log("\n")


    for (let fila = 0; fila < 3; fila++) {
        let line = "";
        for (let columna = 0; columna < 3; columna++) {
          if (fila === columna || fila + columna === 3 - 1) {
            line += bingo[fila][columna] + " ";
          } else {
            line += "  "; 
          }
        }
        console.log(line);
      }

      console.log("\n")


      for (let fila = 2; fila < 5; fila++) {
        let line = "";
        for (let columna = 0; columna < 3; columna++) {
          if (fila === columna || fila + columna === 4 - 2 || fila + columna === 4 || fila + columna === 6) {
            line += bingo[fila][columna] + " ";
          } else {
            line += "  "; 
          }
        }
        console.log(line);
      }


      console.log("\n")
  

      for (let fila = 0; fila < 3; fila++) {
        let line = "";
        for (let columna = 2; columna < 5; columna++) {
          if (fila === columna || fila + columna === 2 || fila + columna === 4 || fila + columna === 6) {
            line += bingo[fila][columna] + " ";
          } else {
            line += "  "; 
          }
        }
        console.log(line);
      }

      