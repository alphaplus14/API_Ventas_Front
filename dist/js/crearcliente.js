const crear = "https://apifrank.proyectosadso.com/clientes";

document
  .getElementById("formularioCliente")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const clienteID = document.querySelector("#numDocumento").value;
    const nuevoCliente = {
      nombres: document.querySelector("#nombre").value,
      apellidos: document.querySelector("#apellido").value,
      direccion: document.querySelector("#direccion").value,
      //Se coloca el nombre del campo de la API para que lea el id
      numero_documento: parseInt(clienteID),
    };

    try {
      const response = await fetch(crear, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoCliente),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Cliente creado correctamente");
        console.log(nuevoCliente);
        // Cerrar modal
        const modal = bootstrap.Modal.getInstance(
          document.querySelector("#miModal"),
        );
        modal.hide();
        // Limpiar el formulario
        document.getElementById("formularioCliente").reset();

        // Recargar la tabla
        cargarClientes();
      } else {
        alert(
          "Error al crear el Cliente: " + (data.message || "Error desconocido"),
        );
      }
    } catch (error) {
      console.error(error);
    }
  });
