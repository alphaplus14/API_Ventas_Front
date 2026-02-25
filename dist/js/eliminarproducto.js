document
  .querySelector("#tablaProductos")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("productoDesactivar")) {
      const productoID = e.target.getAttribute("data-id");

      if (!confirm("¿Seguro que deseas eliminar este Producto? ")) return;
      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/productos/${productoID}`,
          {
            method: "DELETE",
          },
        );
        const data = await response.json();
        if (response.ok) {
          alert("Producto eliminado correctamente");
          cargarProductos(); // recarga la tabla
        } else {
          alert(data.message || "Error al eliminar");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
