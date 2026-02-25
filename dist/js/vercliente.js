document
  .querySelector("#tablaClientes")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    if (e.target.classList.contains("clienteVer")) {
      const idCliente = e.target.getAttribute("data-id");

      try {
        const response = await fetch(
          `https://apifrank.proyectosadso.com/clientes/${idCliente}`,
        );

        const data = await response.json();

        console.log("data recibida", data);

        if (response.ok && data) {
          document.querySelector("#verNumDocumento").value =
            data.numero_documento;
          document.querySelector("#verNombre").value = data.nombres;
          document.querySelector("#verApellido").value = data.apellidos;
          document.querySelector("#verDireccion").value = data.direccion;
          const modal = new bootstrap.Modal(
            document.getElementById("verCliente"),
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
