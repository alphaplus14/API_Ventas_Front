let clienteIdEditar = "";
document
  .querySelector("#tablaClientes")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("clienteEditar")) {
      clienteIdEditar = e.target.getAttribute("data-id");

      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/clientes/${clienteIdEditar}`,
        );

        const data = await response.json();

        if (response.ok && data) {
          document.querySelector("#editarNombre").value = data.nombres;
          document.querySelector("#editarApellido").value = data.apellidos;
          document.querySelector("#editarDireccion").value = data.direccion;

          const modal = new bootstrap.Modal(
            document.getElementById("modalEditar"),
          );
          modal.show();
        } else {
          alert("No se pudieron cargar los datos del Cliente");
        }
      } catch (error) {
        console.error("error:", error);
      }
    }
  });

document
  .querySelector("#formularioEditarCliente")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const datosUpdate = {
      nombres: document.querySelector("#editarNombre").value,
      apellidos: document.querySelector("#editarApellido").value,
      direccion: document.querySelector("#editarDireccion").value,
    };

    try {
      const response = await fetch(
        `https://apifrank.proyectosadso.com/clientes/${clienteIdEditar}`,
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
        alert("Cliente Actualizado correctamente");
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("modalEditar"),
        );
        modal.hide();

        // Recargar tabla
        cargarClientes();
      } else {
        alert(
          "Error al actualizar: " + (resultado.message || "Error desconocido"),
        );
      }
    } catch (error) {
      console.error("error:", error);
    }
  });
