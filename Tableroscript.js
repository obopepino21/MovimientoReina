generar = () => {
  const tablero = document.getElementById("tablero");
  tablero.innerHTML = ""; // Limpiar el contenido anterior del tablero
  let fingreso = parseInt(document.getElementById("fingreso").value) - 1;
  let cingreso = parseInt(document.getElementById("fcolumna").value) - 1;

  if ((fingreso >= 0 && fingreso <= 8) && (cingreso >= 0 && cingreso <= 8)) {

    for (let fila = 0; fila < 8; fila++) {
      const filaElemento = document.createElement("tr");
      for (let columna = 0; columna < 8; columna++) {
        const casilla = document.createElement("td");
        filaElemento.appendChild(casilla);
        if ((fila + columna) % 2 === 0) {
          casilla.classList.add("casilla-blanca");
        } else {
          casilla.classList.add("casilla-negra");
        }
        // Creación de elemento para generar imagen
        const Cimagen = document.createElement("img");
        if (fila === fingreso && columna === cingreso) {
          Cimagen.src = "reina.png";
          Cimagen.classList.add("EstiloImagen");
          casilla.appendChild(Cimagen);
        }
        if (fila === fingreso || columna === cingreso || fila + columna === fingreso + cingreso || fila - columna === fingreso - cingreso) {
          casilla.addEventListener("click", MovimientoPosible);
        } else {
          casilla.addEventListener("click", MovimientoImposible);
        }
      }
      tablero.appendChild(filaElemento);
    }
  } else {
    alert("Ingrese valores entre el 1 y el 8");
  }


};

function MovimientoPosible() {
  this.classList.toggle("posiblemovimiento");
}
function MovimientoImposible() {
  this.classList.toggle("movimientoImposible");
  
}

