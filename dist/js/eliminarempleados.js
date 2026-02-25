document
  .querySelector("#tablaEmpleados")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("empleadoDesactivar")) {
      const id = e.target.getAttribute("data-id");

      if (!confirm("¿Seguro que deseas eliminar este Empleado? ")) return;
      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/empleados/${id}`,
          {
            method: "DELETE",
          },
        );
        const data = await response.json();
        console.log("Respuesta:", data);
        if (response.ok) {
          alert("Empleado Eliminado Correctamente");
          cargarEmpleados();
        } else {
          alert(data.message || "Error al eliminar");
        }
      } catch (error) {
        console.error("error:", error);
      }
    }
  });
