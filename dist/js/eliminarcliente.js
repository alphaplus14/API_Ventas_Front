document
  .querySelector("#tablaClientes")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("clienteDesactivar")) {
      const id = e.target.getAttribute("data-id");

      if (!confirm("¿Seguro que deseas eliminar este Cliente? ")) return;
      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/clientes/${id}`,
          {
            method: "DELETE",
          },
        );
        const data = await response.json();
        console.log("Respuesta:", data);
        if (response.ok) {
          alert("Cliente Eliminado Correctamente");
          cargarClientes();
        } else {
          alert(data.message || "Error al eliminar");
        }
      } catch (error) {
        console.error("error:", error);
      }
    }
  });
