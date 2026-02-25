async function cargarProductos() {
  const response = await fetch("https://apifrank.proyectosadso.com/productos");
  const data = await response.json();

  const tbody = document.querySelector("#tablaProductos tbody");
  tbody.innerHTML = "";

  data.forEach((producto) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
    <td> ${producto.id} </td>
    <td> ${producto.nombre} </td>
    <td> ${producto.descripcion} </td>
    <td> ${producto.precio} </td>
    <td> ${producto.stock} </td>
    <td class="text-center">
        <div class="d-flex flex-column flex-md-row justify-content-center gap-1">
          <button type="button" class="btn btn-info btn-sm productoVer" data-id="${producto.id}">
            👀 Ver
          </button>
          <button type="button" class="btn btn-warning btn-sm productoEditar" data-id="${producto.id}">
            📝 Editar
          </button>
          <button type="button" class="btn btn-danger btn-sm productoDesactivar" data-id="${producto.id}">
            ❌ Eliminar
          </button>
  
        </div>
      </td>
    `;
    tbody.appendChild(fila);
  });

  console.log(data);
}

document.addEventListener("DOMContentLoaded", cargarProductos);
