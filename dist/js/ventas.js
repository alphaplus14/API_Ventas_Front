async function cargarVentas() {
  const response = await fetch("https://apifrank.proyectosadso.com/ventas");
  const data = await response.json();

  const tbody = document.querySelector("#tablaVentas tbody");
  tbody.innerHTML = "";

  data.forEach((venta) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
    <td> ${venta.id} </td>
    <td> ${venta.fecha} </td>
    <td> ${venta.total} </td>
    <td> ${venta.identificacion} </td>
    <td> ${venta.empleado_nombres} </td>
    <td class="text-center">
        <div class="d-flex flex-column flex-md-row justify-content-center gap-1">
          <button type="button" class="btn btn-info btn-sm ventaVer" data-id="${venta.id}">
            👀 Ver
          </button>
          <button type="button" class="btn btn-warning btn-sm ventaEditar" data-id="${venta.id}">
            📝 Editar
          </button>
          <button type="button" class="btn btn-danger btn-sm ventaDesactivar" data-id="${venta.id}">
            ❌ Eliminar
          </button>
  
        </div>
      </td>
    `;
    tbody.appendChild(fila);
  });

  console.log(data);
}

document.addEventListener("DOMContentLoaded", cargarVentas);
