let empleadoIdEditar = "";
document
  .querySelector("#tablaEmpleados")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("empleadoEditar")) {
      empleadoIdEditar = e.target.getAttribute("data-id");

      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/empleados/${empleadoIdEditar}`,
        );

        const data = await response.json();

        if (response.ok && data) {
          document.querySelector("#editarNombre").value = data.nombres;
          document.querySelector("#editarApellido").value = data.apellidos;
          document.querySelector("#editarTelefono").value = data.telefono;

          const modal = new bootstrap.Modal(
            document.getElementById("modalEditar"),
          );
          modal.show();
        } else {
          alert("No se pudieron cargar los datos del Empleado");
        }
      } catch (error) {
        console.error("error:", error);
      }
    }
  });

document
  .querySelector("#formularioEditarEmpleado")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const datosUpdate = {
      nombres: document.querySelector("#editarNombre").value,
      apellidos: document.querySelector("#editarApellido").value,
      telefono: document.querySelector("#editarTelefono").value,
    };

    try {
      const response = await fetch(
        `https://apifrank.proyectosadso.com/empleados/${empleadoIdEditar}`,
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
        alert("Empleado Actualizado correctamente");
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("modalEditar"),
        );
        modal.hide();

        // Recargar tabla
        cargarEmpleados();
      } else {
        alert(
          "Error al actualizar: " + (resultado.message || "Error desconocido"),
        );
      }
    } catch (error) {
      console.error("error:", error);
    }
  });
