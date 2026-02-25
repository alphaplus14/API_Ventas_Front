let productoEditar = "";
document
  .querySelector("#tablaProductos")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("productoEditar")) {
      productoEditar = e.target.getAttribute("data-id");

      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/productos/${productoEditar}`,
        );

        const data = await response.json();

        if (response.ok && data) {
          document.querySelector("#editNombre").value = data.nombre;
          document.querySelector("#editDescripcion").value = data.descripcion;
          document.querySelector("#editPrecio").value = data.precio;
          document.querySelector("#editCantidad").value = data.stock;
          const modal = new bootstrap.Modal(
            document.getElementById("modalEditar"),
          );
          modal.show();
        } else {
          alert("No se pudieron cargar los datos del equipo");
        }
      } catch (error) {
        console.error("error:", error);
      }
    }
  });

document
  .querySelector("#formularioEditarProducto")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const datosUpdate = {
      nombre: document.querySelector("#editNombre").value,
      descripcion: document.querySelector("#editDescripcion").value,
      precio: document.querySelector("#editPrecio").value,
      stock: document.querySelector("#editCantidad").value,
    };

    try {
      const response = await fetch(
        `https://apifrank.proyectosadso.com/productos/${productoEditar}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datosUpdate),
        },
      );

      const resultado = await response.json();

      if (response.ok) {
        alert("Producto Actualizado correctamente");
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("modalEditar"),
        );
        modal.hide();

        // Recargar tabla
        cargarProductos();
      } else {
        alert(
          "Error al actualizar: " + (resultado.message || "Error desconocido"),
        );
      }
    } catch (error) {
      console.error("error:", error);
    }
  });
