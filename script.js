
const buscador = document.getElementById("buscar");
const productos = document.querySelectorAll(".producto");

buscador.addEventListener("keyup", function () {
  const texto = buscador.value.toLowerCase();

  productos.forEach((producto) => {
    const nombre = producto.querySelector("h3").textContent.toLowerCase();

    if (nombre.includes(texto)) {
      producto.style.display = "block";
    } else {
      producto.style.display = "none";
    }
  });
});
