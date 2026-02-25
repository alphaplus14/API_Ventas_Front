document
  .querySelector("#tablaProductos")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("productoVer")) {
      const productoVer = e.target.getAttribute("data-id");

      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/productos/${productoVer}`,
        );

        const data = await response.json();

        if (response.ok && data) {
          document.querySelector("#verID").value = data.id;
          document.querySelector("#verNombre").value = data.nombre;
          document.querySelector("#verDescripcion").value = data.descripcion;
          document.querySelector("#verPrecio").value = data.precio;
          document.querySelector("#verCantidad").value = data.stock;
          const modal = new bootstrap.Modal(
            document.getElementById("verProducto"),
          );
          modal.show();
        } else {
          alert("No se pudieron cargar los datos del Producto");
        }
      } catch (error) {
        console.error("error:", error);
      }
    }
  });
