document
  .querySelector("#tablaEmpleados")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("empleadoVer")) {
      const idEmpleado = e.target.getAttribute("data-id");

      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/empleados/${idEmpleado}`,
        );

        const data = await response.json();

        console.log("data recibida", data);

        if (response.ok && data) {
          document.querySelector("#verIdentificacion").value =
            data.identificacion;
          document.querySelector("#verNombre").value = data.nombres;
          document.querySelector("#verApellido").value = data.apellidos;
          document.querySelector("#verTelefono").value = data.telefono;
          const modal = new bootstrap.Modal(
            document.getElementById("verEmpleado"),
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
