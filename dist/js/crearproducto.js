const crear = "https://apifrank.proyectosadso.com/productos";

document
  .getElementById("formularioProducto")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const nuevoProducto = {
      nombre: document.querySelector("#nombre").value,
      descripcion: document.querySelector("#descripcion").value,
      precio: document.querySelector("#precio").value,
      stock: document.querySelector("#Cantidad").value,
    };
    console.log(nuevoProducto);
    try {
      const response = await fetch(crear, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProducto),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Producto creado correctamente");
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(
          document.querySelector("#miModal"),
        );
        modal.hide();
        // Limpiar el formulario
        document.querySelector("#formularioProducto").reset();

        // Recargar la tabla
        cargarProductos();
      } else {
        alert(
          "Error al crear el Producto: " +
            (data.message || "Error desconocido"),
        );
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión: " + error.message);
    }
  });
