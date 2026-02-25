const crear = "https://apifrank.proyectosadso.com/empleados";

document
  .getElementById("formularioEmpleado")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const nuevoEmpleado = {
      identificacion: document.querySelector("#identificacion").value,
      nombres: document.querySelector("#nombre").value,
      apellidos: document.querySelector("#apellido").value,
      telefono: document.querySelector("#telefono").value,
    };

    try {
      const response = await fetch(crear, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoEmpleado),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Empleado creado correctamente");
        console.log(nuevoEmpleado);
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(
          document.querySelector("#miModal"),
        );
        modal.hide();
        // Limpiar el formulario
        document.getElementById("formularioEmpleado").reset();

        // Recargar la tabla
        cargarEmpleados();
      } else {
        alert(
          "Error al crear el Empleado: " +
            (data.message || "Error desconocido"),
        );
      }
    } catch (error) {
      console.error(error);
    }
  });
