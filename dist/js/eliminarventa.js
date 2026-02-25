document
  .querySelector("#tablaVentas")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("ventaDesactivar")) {
      const ventaID = e.target.getAttribute("data-id");

      if (!confirm("¿Seguro que deseas eliminar esta Venta? ")) return;
      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/ventas/${ventaID}`,
          {
            method: "DELETE",
          },
        );
        const data = await response.json();
        if (response.ok) {
          alert("Venta eliminada correctamente");
          cargarVentas(); // recarga la tabla
        } else {
          alert(data.message || "Error al eliminar");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
