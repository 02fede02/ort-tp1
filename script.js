const carritoCantidad = document.querySelector(".carrito-cantidad");
const botonesAgregar = document.querySelectorAll(".btn-agregar");
const contactar = document.getElementById("contactar");
let contadorCarrito = 0;

function actualizarCantidadCarrito() {
  if (contadorCarrito > 9) {
    carritoCantidad.innerHTML = "9<sup style='font-size: 10px'>+</sup>";
  } else {
    carritoCantidad.textContent = contadorCarrito.toString();
  }
  carritoCantidad.style.display = "flex";
}

contactar.addEventListener("click", function(event) {
  event.preventDefault(); 

  const nombre = document.getElementById("exampleInputName").value;
  const apellido = document.getElementById("exampleInputLastName").value; 
  const email = document.getElementById("exampleInputEmail").value;
  const numero = document.getElementById("exampleInputPhone").value;

  const esNombreValido = validarNoVacio(nombre);
  const esApellidoValido = validarNoVacio(apellido);
  const esEmailValido = validarEmail(email);
  const esTelValido = validarTelefono(numero);
  
  if(esNombreValido) {
    if(esApellidoValido) {
      if(esEmailValido) {
        if(esTelValido) {
          alert("Enviamos tu mensaje");
          window.location.href = 'index.html';
        } else {
          alert("Ingrese un telefono valido");
        } 

      } else {
        alert("Ingrese un email valido")
      }
    } else {
      alert("Ingrese un apellido valido.")
    }
  } else {
    alert("Ingrese un nombre valido.")
  }
});

function validarNoVacio(texto) {
	//recibe en el parámetro la cadena de texto ingresada
  // TODO generalizar focus para ponerlo cuando falta validar.
	return texto != "";
}

function validarTelefono(numero) {
  const patron = /^\d{2}-\d{4}-\d{4}$/;
  
  return numero.match(patron)
} 

function validarEmail(email) {
  
  const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return patronEmail.test(email);
}

botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    contadorCarrito++;

    actualizarCantidadCarrito();
  });
});
