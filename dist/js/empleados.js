const url = "https://apifrank.proyectosadso.com/empleados";

async function cargarEmpleados() {
  const res = await fetch(url);
  const data = await res.json();

  const tbody = document.querySelector("#tablaEmpleados tbody");

  tbody.innerHTML = "";

  data.forEach((empleado) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${empleado.identificacion}</td>
      <td>${empleado.nombres}</td>
      <td>${empleado.apellidos}</td>
      <td>${empleado.telefono}</td>
      <td class="text-center">
        <div class="d-flex flex-column flex-md-row justify-content-center gap-1">
          <button type="button" class="btn btn-info btn-sm empleadoVer" data-id="${empleado.identificacion}">
            👀 Ver
          </button>
          <button type="submit" class="btn btn-warning btn-sm empleadoEditar" data-id="${empleado.identificacion}">
            📝 Editar
          </button>
          <button type="submit" class="btn btn-danger btn-sm empleadoDesactivar" data-id="${empleado.identificacion}">
            ❌ Eliminar
          </button>
        </div>
      </td>
    `;

    tbody.appendChild(fila);
  });
}

document.addEventListener("DOMContentLoaded", cargarEmpleados);
