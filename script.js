const carritoCantidad = document.querySelector(".carrito-cantidad");
const botonesAgregar = document.querySelectorAll(".btn-agregar");

let contadorCarrito = 0;

function actualizarCantidadCarrito() {
  if (contadorCarrito > 9) {
    carritoCantidad.innerHTML = "9<sup style='font-size: 10px'>+</sup>"
  } else {
    carritoCantidad.textContent = contadorCarrito.toString();
  }
  carritoCantidad.style.display = "flex";
}

botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    contadorCarrito++;

    actualizarCantidadCarrito();
  });
});
