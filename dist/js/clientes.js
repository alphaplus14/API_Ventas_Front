const url = "https://apifrank.proyectosadso.com/clientes";

async function cargarClientes() {
  const res = await fetch(url);
  const data = await res.json();

  const tbody = document.querySelector("#tablaClientes tbody");

  tbody.innerHTML = "";

  data.forEach((cliente) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${cliente.numero_documento}</td>
      <td>${cliente.nombres}</td>
      <td>${cliente.apellidos}</td>
      <td>${cliente.direccion}</td>
      <td class="text-center">
        <div class="d-flex flex-column flex-md-row justify-content-center gap-1">
          <button type="button" class="btn btn-info btn-sm clienteVer" data-id="${cliente.numero_documento}">
            👀 Ver
          </button>
          <button type="submit" class="btn btn-warning btn-sm clienteEditar" data-id="${cliente.numero_documento}">
            📝 Editar
          </button>
          <button type="submit" class="btn btn-danger btn-sm clienteDesactivar" data-id="${cliente.numero_documento}">
            ❌ Eliminar
          </button>
        </div>
      </td>
    `;

    tbody.appendChild(fila);
  });
}

document.addEventListener("DOMContentLoaded", cargarClientes);
